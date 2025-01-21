import axios from 'axios'
import 'dotenv/config'
import Logger from '@shared/logger/Logger';
import AppError from '@shared/erros/AppError';
import { urlEnvioPagamento, urlValidacaoPagamento } from '@shared/const/loginPayer';
import { Pagamentos } from '../model/PagamentoModel';
import LoginPayerService from './LoginPayerService';

//TODO tipar objetos
class EnvioPagamento {
  public async envioPagamento(dados: any, tenantId: string) {

    const { receiver, message } = dados

    const dadosMessage = {
      command: message.command,
      value: String(message.value),
      paymentMethod: message.paymentMethod,
      paymentType: message.paymentType,
      paymentMethodSubType: message.paymentMethodSubType,
      installments: message.installments,
    }

    const loginService = new LoginPayerService();
    const idTokenPayer = await loginService.loginPayer();

    const dadosPagamento: any = {
      type: "INPUT",
      origin: dados.origin,
      data: {
        correlationId: dados.correlationId,
        flow: "SYNC",
        automationName: "JOB3",
        callbackUrl: process.env.URL_CALLBACK_PAYER + '/' + tenantId
        ,
        receiver: receiver,
        message: dadosMessage
      }
    }

    const pagamento = new Pagamentos(dadosPagamento)

    try {

      //TODO isolar validação
      const validate = await axios.post(urlValidacaoPagamento, dadosPagamento, {
          headers: {
              'Authorization': idTokenPayer
          }
      })

      if (validate.data.error) throw new AppError(validate.data)

      //Isolar envio pagamento
      const resp = await axios.post(urlEnvioPagamento, dadosPagamento, {
          headers: {
              'Authorization': idTokenPayer
          }
      })

      Logger.info({ dadosPagamento: dadosPagamento, response: resp.data })
      
      //TODO garantir os dados salvos corretamente no banco mongo

      const save = await pagamento.save(dadosPagamento);
      return resp.data
    } catch (error) {
      return error
    }
  }
}

export default EnvioPagamento
