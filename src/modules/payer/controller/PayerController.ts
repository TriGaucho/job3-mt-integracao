import { Request, Response } from 'express'
import PayerService from '../service/PayerService'
import LoginService from '../service/LoginService'

export default class PayerController {
    public async get(req: Request, res: Response): Promise<Response> {
        const payerService = new PayerService();
       
        const response = await payerService.get()
       
        return res.json(response) 
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { body } = req

        const payerService = new PayerService();
       
        const response = await payerService.create(body)
       
        return res.json(response) 
    }

    public async login(req: Request, res: Response): Promise<Response> {
        const { clientId, username, password } = req.body

        const loginService = new LoginService();
       
        const response = await loginService.post(clientId, username, password)
       
        return res.json(response) 
    }
}

