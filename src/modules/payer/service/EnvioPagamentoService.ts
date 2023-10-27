import AppError from '@shared/erros/AppError';
import axios from 'axios'
import { pagamentoMock } from '../mock/pagamentoMock';

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
        
        const urlEnvioPagamento = 'https://v4kugeekeb.execute-api.us-east-1.amazonaws.com/prod-stage/cloud-notification/create';

        const dadosPagamento = {
            type: "INPUT",
            origin: dados.origin,
            data: {
                correlationId: dados.correlationId,
                flow: "SYNC",
                automationName: "JOB3",
                callbackUrl: "https://webhook.site/c8bab2dc-64df-40c7-b580-0abdb8f7f024",
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
        const urlLogin = 'https://bk07exvx19.execute-api.us-east-1.amazonaws.com/dev-stage/oauth/login';

        try {
            const resp = await axios.post(urlLogin, {
                clientId: "3veb9e18d50ceqes38o1i8mlph",
                username: "comercial@job3.com.br",
                password: "Mlc090927*"
            })
            return resp.data.AuthenticationResult
        } catch (error) {
            return error
        }
    }
}

export default EnvioPagamento