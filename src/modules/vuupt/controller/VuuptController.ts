import { Request, Response } from 'express'
import CustomersService from '../service/CustomersService'

export default class VuuptController {
  public async get(req: Request, res: Response): Promise<Response> {
    const { tenantId } = req.params

    const customersService = new CustomersService()

    const response = await customersService.get(tenantId)

    return res.json(response)
  }
}
