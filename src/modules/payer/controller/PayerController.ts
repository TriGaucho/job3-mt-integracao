import { Request, Response } from 'express'
import PayerService from '../service/PayerService'

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
}

