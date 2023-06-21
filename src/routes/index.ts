import { Router } from 'express'
import LoggerMiddleware from '@shared/middlewares/logger.middlewares'

import configuracoes from '@modules/configuracao/routes/configuracao.routes'
import vuuptController from '@modules/vuupt/controller/VuuptController'

const routes = Router()

routes.use(LoggerMiddleware)

routes.use('/config', configuracoes)
routes.use('/vuupt/:tenantId', vuuptController.getCustumers)

export default routes
