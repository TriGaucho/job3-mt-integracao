import { chaveApi } from "@shared/const/banco"
import AppError from "@shared/erros/AppError"
import knex from "@shared/knex"
import Logger from "@shared/logger/Logger"

class ChaveIntegracaoRepository {
  public async consultaChave(tenantId: string, integracao: string) {
    return knex(chaveApi).where({tenantId, nome: integracao})
    .then((res) => {
      Logger.info(res)
      return res[0]
    })
    .catch(erro => {
      Logger.error(erro)
      throw new AppError(erro.sqlMessage)
    })
  }
}

export default ChaveIntegracaoRepository
