import { Request, Response } from 'express'
import CreateNotaProcesssada from '../service/CreateNotaProcesssada'

export default class SafeWebController {
    public async postNotaProcessada(req: Request, res: Response): Promise<Response> {
        const { InformacaoProtocolo, Versao } = req.body
    
        const createNotaProcesssada = new CreateNotaProcesssada()
    
        const response = await createNotaProcesssada.post({...InformacaoProtocolo, Versao})
    
        return res.json(response)
      }

    public async postDocumentoGerado(req: Request, res: Response): Promise<Response> {
        const { body } = req.body
    
        const createNotaProcesssada = new CreateNotaProcesssada()
    
        const response = await createNotaProcesssada.post({...body})
    
        return res.json(response)
      }
}