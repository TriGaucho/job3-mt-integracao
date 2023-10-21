import { Router } from 'express'; 
import SafeWebController from '../controller/SafeWebController'

const safeWebRouter = Router()

const safeWebController = new SafeWebController()

safeWebRouter.post('/nota-processada', safeWebController.postNotaProcessada)
safeWebRouter.post('/documento-gerado', safeWebController.postNotaProcessada)

export default safeWebRouter