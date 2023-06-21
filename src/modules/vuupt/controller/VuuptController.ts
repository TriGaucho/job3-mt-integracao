import { Request, Response } from 'express'
import CustomersService from '../service/CustomersService'

export default class VuuptController {
  static async getCustumers(req: Request, res: Response): Promise<any> {
    const { tenantId } = req.params

    const result = await CustomersService.get(tenantId)

    if (result) return res.status(200).json(result)
  }
}
