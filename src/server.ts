import express, { Request, NextFunction, Response,  } from 'express'
import cors from 'cors'
import 'dotenv/config'
import 'express-async-errors'

import routes from './routes'

import Logger from '@shared/logger/Logger'
import AppError from '@shared/erros/AppError'

const app = express()

app.use(cors())

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(routes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  Logger.error(error)
  if (error instanceof AppError) {
    const errorObject = {
      status: 'instanceof AppError',
      message: error.message
    }
    return res.status(error.statusCode).json(errorObject)
  }

  const errorObject = {
    status: 'error',
    message: 'Erro interno do servidor !'
  }

  return res.status(500).json(errorObject)
})

app.listen(21034, () => {
  Logger.info(`Serviço de integração em execução na porta 21034`)
})
