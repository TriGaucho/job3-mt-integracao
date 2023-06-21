import { vuuptApi } from '@shared/const/urlIntegracao';
import AppError from '@shared/erros/AppError';
import Logger from '@shared/logger/Logger';
import axios from 'axios'
import ChaveIntegracaoService from '@modules/chaveIntegracao/service/ChaveIntegracaoService'


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
      }
      )
      return response.data
    } catch (error) {
      Logger.error(error)
      throw new AppError('Erro na requisição à API VUUPT');
    }

  }

}

export default CustomersService
