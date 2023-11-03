import { Request, Response } from 'express'
import PayerService from '../service/CallbackPayerService'
import LoginPayerService from '../service/LoginPayerService'
import EnvioPagamentoService from '../service/EnvioPagamentoService'

export default class PayerController {
    public async get(req: Request, res: Response): Promise<Response> {
        const payerService = new PayerService();
       
        const response = await payerService.get()
       
        return res.json(response) 
    }

    public async salvaRetornoPagamento(req: Request, res: Response): Promise<Response> {
        const { body } = req

        const payerService = new PayerService();
       
        const response = await payerService.salvaRetornoPagamento(body)
       
        return res.json(response)
    }

    public async login(req: Request, res: Response): Promise<Response> {
        const loginService = new LoginPayerService();
       
        const response = await loginService.loginPayer()
       
        return res.json(response) 
    }

    public async pagamento(req: Request, res: Response): Promise<Response> {
        const { body } = req
        const { tenandId } = req.params

        const envioPagamentoService = new EnvioPagamentoService();
       
        const response = await envioPagamentoService.envioPagamento(body, tenandId)
       
        return res.json(response) 
    }
}

