import AppError from '@shared/erros/AppError';
import axios from 'axios'
import 'dotenv/config'

import PagamentoRepository from '../repositories/PagamentoRepository'
import { client } from '@shared/const/ambiente';
import { pass, urlEnvioPagamento, urlLogin, user } from '@shared/const/loginPayer';

interface IPagamento {
    origin: String;
    correlationId: String;
    receiver: IReceiver;
    message: IMessage;

}

interface IReceiver {
    companyId: String;
    storeId: String;
    terminalId: String;
}

interface IMessage {
    command: String;
    value: Number;
    paymentMethod: String;
    paymentType: String;
    paymentMethodSubType: String;
    installments: Number;
}
class EnvioPagamento {
    public async envioPagamento(dados: IPagamento) {
        
        await this.salvaPagamento(dados);

        const dadosPagamento = {
            type: "INPUT",
            origin: dados.origin,
            data: {
                correlationId: dados.correlationId,
                flow: "SYNC",
                automationName: "JOB3",
                callbackUrl: process.env.MONGO_INITDB_ROOT_USERNAME,
                receiver: dados.receiver,
                message: dados.message
            }
        }

        const resp  = await this.login()
        const { IdToken } = resp

        if (!IdToken) throw new AppError('Erro Payer.') 
        try {
            const resp = await axios.post(urlEnvioPagamento, dadosPagamento, {
                headers: {
                  'Authorization': IdToken 
                }
              })
            return resp.data
        } catch (error) {
            return error
        }
    }

    private async login() {
        try {
            const resp = await axios.post(urlLogin, {
                clientId: client,
                username: user,
                password: pass
            })
            return resp.data.AuthenticationResult
        } catch (error) {
            return error
        }
    }

    private async salvaPagamento(pagamento: any) {
        return await PagamentoRepository.create({ pagamento: pagamento })
    }
}

export default EnvioPagamento