import { Router } from 'express';
import DadosApiController from '../controller/DadosApiController'

const sessaoRouter = Router()

const dadosApiController = new DadosApiController()

sessaoRouter.get('/', dadosApiController.show)

export default sessaoRouter
