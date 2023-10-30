import RetornoPagamentoCallbackRepository from "../repositories/RetornoPagamentoCallbackRepository";

class PayerService {
    async get() {
        return await RetornoPagamentoCallbackRepository.find({})
    }

    //TODO melhorar schema(objto) salvo no Mongo
    async create(responseCallback: any) {
        return await RetornoPagamentoCallbackRepository.create({ responseCallback: responseCallback })
    }
}

export default PayerService