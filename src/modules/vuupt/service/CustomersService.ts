// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios')
import { vuuptApi } from '@shared/const/urlIntegracao';
import AppError from '@shared/erros/AppError';
import Logger from '@shared/logger/Logger';
import ChaveIntegracaoService from '@shared/consultaChave/service/ChaveIntegracaoService'

class CustomersService {
  async delay() {
    return new Promise(resolve => setTimeout(resolve, 200))
  }

  public async get(tenantId: string) {
    // await this.delay()
    const chaveIntegracaoService = new ChaveIntegracaoService()

    const { chave } = await chaveIntegracaoService.buscaTokenApi(tenantId, vuuptApi.nome)

    try {
      const response = await axios.get(`${vuuptApi.url}/customers`, {
        headers: {
          'Authorization': chave
        }
      })
      return response.data
    } catch (error) {
      Logger.error(`Erro integração ${vuuptApi.nome.toUpperCase()} - ${error}`)
      throw new AppError(`Falha na requisição à API  ${vuuptApi.nome.toUpperCase()}`);
    }

  }

}

export default CustomersService
