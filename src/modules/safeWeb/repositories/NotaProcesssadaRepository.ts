import { tabelaNotaProcessada } from "@shared/const/banco"
import AppError from "@shared/erros/AppError"
import knex from "@shared/knex"
import Logger from "@shared/logger/Logger"
import NotaProcessada from '../entities/NotaProcessada'

class NotaProcesssadaRepository {
    public async create(notaProcessada: NotaProcessada): Promise<number> {
        return await knex(tabelaNotaProcessada).insert(notaProcessada).returning('idEmpresa')
          .then((dados) => {
            Logger.info(dados[0])
            return dados[0]
          })
          .catch(erro => {
            Logger.error(erro)
            throw new AppError(erro.sqlMessage)
          })
      }

    public async show(): Promise<NotaProcessada[] | void> {
        return await knex(tabelaNotaProcessada)
          .then((dados) => {
            return dados
          })
          .catch(erro => {
            Logger.error(erro)
            throw new AppError(erro.sqlMessage)
          })
      }

      //TODO AJUSTAR parametro de filter
      public async findOne(filter: any): Promise<NotaProcessada[] | void> {
        return await knex(tabelaNotaProcessada).where({ filter })
          .then((dados) => {
            return dados
          })
          .catch(erro => {
            Logger.error(erro)
            throw new AppError(erro.sqlMessage)
          })
      }
}

export default NotaProcesssadaRepository