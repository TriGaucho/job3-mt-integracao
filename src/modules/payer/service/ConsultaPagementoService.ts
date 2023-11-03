

class ConsultaPagamento {
    async get(correlation: string) {
        // const responseCallback = await RetornoPagamentoCallbackRepository.findOne({ 'responseCallback.correlationId': correlation }, { 'responseCallback.correlationId': 1, 'responseCallback.statusTransaction': 1, '_id': 0 })
        // return responseCallback
    }
}

export default ConsultaPagamento