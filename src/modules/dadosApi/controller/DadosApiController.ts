import { Request, Response } from 'express'
import DadosApiService from '../services/DadosApiService'
import config from '@config/config'
import { ambiente, api, ecosystem, portaApi } from '@shared/const/ambiente'

export default class ConfiguracoesController {
  public async show(req: Request, res: Response): Promise<Response> {

    const dadosApiService = new DadosApiService()
    const dadosBD = await dadosApiService.execute()

    const versaoBackend = config.versao
    return res.json({ api, versaoBackend, ambiente, portaApi, ecosystem, dadosBD })
  }
}
