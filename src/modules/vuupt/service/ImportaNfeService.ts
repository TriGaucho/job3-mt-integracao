import { vuuptApi } from '@shared/const/urlIntegracao';
import AppError from '@shared/erros/AppError';
import Logger from '@shared/logger/Logger';
import axios from 'axios'
import ChaveIntegracaoService from '@modules/chaveIntegracao/service/ChaveIntegracaoService'
import FormData from 'form-data'

class ImportaNfeService {
  public async post(tenantId: string, xmlNfe: any) {
    // await this.delay()
    const chaveIntegracaoService = new ChaveIntegracaoService()
    const data = new FormData()

    const { chave } = await chaveIntegracaoService.buscaTokenApi(tenantId, vuuptApi.nome)

    data.append('xml', xmlNfe)

    try {
      const response = await axios.post(`${vuuptApi.url}/imports/nfe`, data, {
        headers: {
          'Authorization': chave
        }
      }
      )
      return response.data
    } catch (error) {
      Logger.error(error)
      throw new AppError('Erro no envio da NFE à API VUUPT.');
    }

  }
}

export default ImportaNfeService
