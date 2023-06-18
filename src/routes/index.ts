import { Router } from 'express'
import LoggerMiddleware from '@shared/middlewares/logger.middlewares'

import configuracoes from '@modules/configuracao/routes/configuracao.routes'

const routes = Router()

routes.use(LoggerMiddleware)

routes.use('/config', configuracoes)

export default routes
