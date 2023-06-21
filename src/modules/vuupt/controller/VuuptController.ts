import { Request, Response } from 'express'

import CustomersService from '../service/CustomersService'
import ImportaNfeService from '../service/ImportaNfeService'

export default class VuuptController {
  public async get(req: Request, res: Response): Promise<Response> {
    const { tenantId } = req.params

    const customersService = new CustomersService()

    const response = await customersService.get(tenantId)

    return res.json(response)
  }

  public async post(req: Request, res: Response): Promise<Response> {

    const { tenantId } = req.params
    const { xml } = req.body

    const importaNfeService = new ImportaNfeService()

    const response = await importaNfeService.post(tenantId, xml)

    return res.json(response)
  }
}
