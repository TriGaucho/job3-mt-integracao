import axios from 'axios'
import 'dotenv/config'

import AppError from '@shared/erros/AppError';
import { urlEnvioPagamento, urlValidacaoPagamento } from '@shared/const/loginPayer';
import { Pagamentos } from '../model/PagamentoModel';
import LoginPayerService from './LoginPayerService';
import Logger from '@shared/logger/Logger';

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
  public async envioPagamento(dados: IPagamento, tenantId: string) {

    const loginService = new LoginPayerService();
    Logger.info('Iniciando login em LoginPayerService')
    const idTokenPayer = await loginService.loginPayer();
    Logger.info('Login em LoginPayerService com SUCESSO')

    const dadosPagamento = {
      type: "INPUT",
      origin: dados.origin,
      data: {
        correlationId: dados.correlationId,
        flow: "SYNC",
        automationName: "JOB3",
        callbackUrl: process.env.URL_CALLBACK_PAYER + '/' + tenantId
        ,
        receiver: dados.receiver,
        message: dados.message
      }
    }

    const pagamento = new Pagamentos(dadosPagamento)

    try {

      //TODO isolar validação
      Logger.info('Validando Pagamento')
      const validate = await axios.post(urlValidacaoPagamento, dadosPagamento, {
        headers: {
          'Authorization': idTokenPayer
        }
      })

      if (validate.data.error) throw new AppError(validate.data)
      Logger.info('Pagamento validado')

      //Isolar envio pagamento
      Logger.info('Realizando integração de pagamento')
      const resp = await axios.post(urlEnvioPagamento, dadosPagamento, {
        headers: {
          'Authorization': idTokenPayer
        }
      })

      //TODO garantir os dados salvos corretamente no banco mongo
      Logger.info('Integração de pagamento realizado com SUCESSO')
      Logger.info('Salvando dados do pagamento')
      const save = await pagamento.save();
      Logger.info('Dados do pagamento salvos com SUCESSO')
      return resp.data
    } catch (error) {
      return error
    }
  }
}

export default EnvioPagamento
