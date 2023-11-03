import { Router } from 'express'; 
import PayerController from '../controller/PayerController';

const payerbRouter = Router()

const payerController = new PayerController()

payerbRouter.get('/callback-payer', payerController.get)
payerbRouter.post('/callback-payer/:tenantId', payerController.salvaRetornoPagamento)
payerbRouter.get('/login-payer', payerController.login)
payerbRouter.post('/pagamento-payer/:tenantId', payerController.pagamento)

export default payerbRouter