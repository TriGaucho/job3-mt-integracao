import { Request, Response } from 'express'
import ConsultaConfiguracoesService from '../services/ConsultaConfiguracoesService'
import config from '@config/config'
import { ambiente, api, ecosystem, portaApi } from '@shared/const/ambiente'

export default class ConfiguracoesController {
  public async show(req: Request, res: Response): Promise<Response> {

    const consultaConfiguracoesService = new ConsultaConfiguracoesService()
    const dadosBD = await consultaConfiguracoesService.execute()

    const versaoBackend = config.versao
    return res.json({ api, versaoBackend, ambiente, portaApi, ecosystem, dadosBD })
  }
}
