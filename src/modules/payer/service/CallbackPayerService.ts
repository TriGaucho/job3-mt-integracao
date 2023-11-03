import { CallbackPayer } from "../model/CallbackModel";

class PayerService {
    async salvaRetornoPagamento(responseCallback: any, tenantId: string) {
        const dados = {...responseCallback, tenantId}
        const callbackPayer = new CallbackPayer(dados)
        return await callbackPayer.save(responseCallback)
    }
}

export default PayerService