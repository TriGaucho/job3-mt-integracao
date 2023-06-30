import express, { Request,  Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import 'express-async-errors'

import routes from './routes'

import Logger from '@shared/logger/Logger'
import AppError from '@shared/erros/AppError'
import { portaApi } from '@shared/const/ambiente'
import { versao } from '@shared/const/versao'

const app = express()

app.use(cors())

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({
  limit: '50mb',
  extended: false,
  parameterLimit: 2
})
);

app.use(routes)

app.use((error: Error, req: Request, res: Response) => {
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

app.listen(portaApi, '127.0.0.1', () => {
  Logger.info(`Integracao: ${versao} / porta: ${portaApi}`)
})
