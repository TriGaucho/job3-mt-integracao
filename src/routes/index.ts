import { Router } from 'express'
import LoggerMiddleware from '@shared/middlewares/logger.middlewares'

import configuracoes from '@modules/configuracao/routes/configuracao.routes'
import vuupt from '@modules/vuupt/routes/vuupt.routes'

const routes = Router()

routes.use(LoggerMiddleware)

routes.use('/config', configuracoes)
routes.use('/vuupt', vuupt)

export default routes
