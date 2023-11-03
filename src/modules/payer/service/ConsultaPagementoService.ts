import { CallbackPayer } from "../model/CallbackModel";

class ConsultaPagamento {
    async get(correlation: string, tenantId: string) {
        return CallbackPayer.findOne(
            {
                correlationId: correlation,
                tenantId: tenantId
            },
            {
                correlationId: 1, statusTransaction: 1, _id: 0
            }
        )
    }
}

export default ConsultaPagamento