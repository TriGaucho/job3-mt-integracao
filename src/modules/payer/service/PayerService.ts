import PayerRepository from "../repositories/PayerRepository";

class PayerService {
    async get() {
        return await PayerRepository.find({})
    }

    async create(responseCallback: any) {
        return await PayerRepository.create({ responseCallback: responseCallback })
    }
}

export default PayerService