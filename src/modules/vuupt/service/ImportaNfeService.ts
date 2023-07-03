/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios')
const FormData = require('form-data')

import { vuuptApi } from '@shared/const/urlIntegracao';
import AppError from '@shared/erros/AppError';
import Logger from '@shared/logger/Logger';
import ChaveIntegracaoService from '@shared/consultaChave/service/ChaveIntegracaoService'

class ImportaNfeService {
  public async post(tenantId: string, xmlNfe: string) {

    const chaveIntegracaoService = new ChaveIntegracaoService()
    const data = new FormData()

    const { chave } = await chaveIntegracaoService.buscaTokenApi(tenantId, vuuptApi.nome)

    data.append('xml', xmlNfe)

    Logger.info(`iniciando integração ${vuuptApi.nome.toUpperCase()} / NFE: ${xmlNfe} - chave: ${chave}`)
    try {
      const response = await axios.post(`${vuuptApi.url}/imports/nfe`, data, {
        headers: {
          'Authorization': chave
        }
      }
      )
      Logger.info(`Integração ${vuuptApi.nome.toUpperCase()} realizada com sucesso - ${response.data}`)
      return response.data
    } catch (error) {
      Logger.error(`Erro integração ${vuuptApi.nome.toUpperCase()} - ${error}`)
      throw new AppError('Erro no envio da NFE à API VUUPT.');
    }

  }
}

export default ImportaNfeService
