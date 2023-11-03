import { CallbackPayer } from "../model/CallbackModel";

class PayerService {
    async salvaRetornoPagamento(responseCallback: any) {
        const callbackPayer = new CallbackPayer(responseCallback)
        return await callbackPayer.save(responseCallback)
    }
}

export default PayerService