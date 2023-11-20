import Logger from "@shared/logger/Logger";
import { CallbackPayer } from "../model/CallbackModel";

class PayerService {
    async salvaRetornoPagamento(responseCallback: any, tenantId: string) {
        const dados = {...responseCallback, tenantId}
        Logger.info(`Callback Payer do correlationId: ${responseCallback?.correlationId}`)
        const callbackPayer = new CallbackPayer(dados)
        return await callbackPayer.save(responseCallback)
    }
}

export default PayerService
