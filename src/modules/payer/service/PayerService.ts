import PayerRepository from "../repositories/PayerRepository";

class PayerService {
    async get() {
        return await PayerRepository.find({})
    }

    //TODO melhorar schema(objto) salvo no Mongo
    async create(responseCallback: any) {
        return await PayerRepository.create({ responseCallback: responseCallback })
    }
}

export default PayerService