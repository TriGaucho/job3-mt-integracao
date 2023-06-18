import LoggerMiddleware from '@shared/middlewares/logger.middlewares'
import { Router } from 'express'

const routes = Router()

routes.use(LoggerMiddleware)

routes.get('/config', (req, res) => {
  return res.json({ mensagem: 'Conexão estabelecida !' })
})

export default routes
