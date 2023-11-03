import { Request, Response } from 'express'
import PayerService from '../service/CallbackPayerService'
import LoginPayerService from '../service/LoginPayerService'
import EnvioPagamentoService from '../service/EnvioPagamentoService'
import ConsultaPagamento from '../service/ConsultaPagementoService'

export default class PayerController {
    public async consultaPagamento(req: Request, res: Response): Promise<Response> {
        const { correlationId } = req.body

        const consultaPagamento = new ConsultaPagamento();
       
        const response = await consultaPagamento.get(correlationId)
       
        return res.json(response) 
    }

    //TODO verifica nomeclatura
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

