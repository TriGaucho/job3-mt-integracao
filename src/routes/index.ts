import { Router } from 'express'
import LoggerMiddleware from '@shared/middlewares/logger.middlewares'

import dadosApi from '@modules/dadosApi/routes/dadosApi.routes'
import vuupt from '@modules/vuupt/routes/vuupt.routes'

const routes = Router()

routes.use(LoggerMiddleware)

routes.use('/config', dadosApi)
routes.use('/vuupt', vuupt)

export default routes
