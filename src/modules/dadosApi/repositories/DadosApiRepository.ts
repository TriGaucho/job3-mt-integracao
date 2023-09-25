import { tabelaConfiguracoes } from "@shared/const/banco"
import AppError from "@shared/erros/AppError"
import knex from "@shared/knex"
import Logger from "@shared/logger/Logger"
import DadosApi from "../entities/DadosApi"

class DadosApiRepository {
  public async show(): Promise<DadosApi[] | void> {
    return await knex(tabelaConfiguracoes)
      .then((dados) => {
        return dados
      })
      .catch(erro => {
        Logger.error(erro)
        throw new AppError(erro.sqlMessage)
      })
  }
}

export default DadosApiRepository
