import ChaveIntegracaoRepository from "../repositories/chaveIntegracaoRepository"

class ChaveIntegracaoService {

  public async buscaTokenApi(tenantId: string, integracao: string) {
    const chaveIntegracaoRepository = new ChaveIntegracaoRepository()

    const tokenApi = await chaveIntegracaoRepository.consultaChave(tenantId, integracao )

    return tokenApi
  }

}

export default ChaveIntegracaoService
