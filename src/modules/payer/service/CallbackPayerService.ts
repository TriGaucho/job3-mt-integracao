import { CallbackPayer } from "../model/CallbackModel";

class PayerService {
    async salvaRetornoPagamento(responseCallback: any, tenandId: string) {
        const callbackPayer = new CallbackPayer({...responseCallback, tenandId})
        return await callbackPayer.save(responseCallback)
    }
}

export default PayerService