import { Router } from 'express'
import LoggerMiddleware from '@shared/middlewares/logger.middlewares'

import dadosApi from '@modules/dadosApi/routes/dadosApi.routes'
import vuupt from '@modules/vuupt/routes/vuupt.routes'
import safeWeb from '@modules/safeWeb/routes/safeweb.routes'
import payer from '@modules/payer/routes/payer.routes'

const routes = Router()

routes.use(LoggerMiddleware)

routes.use('/config', dadosApi)
routes.use('/vuupt', vuupt)
routes.use('/safeweb', safeWeb)
routes.use('/payer', payer)

export default routes
