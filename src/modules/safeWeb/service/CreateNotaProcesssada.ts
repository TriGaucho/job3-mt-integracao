const axios = require('axios')
const FormData = require('form-data')

import AppError from '@shared/erros/AppError';
import Logger from '@shared/logger/Logger';
import NotaProcessada from '../entities/NotaProcessada';
import NotaProcesssadaRepository from '../repositories/NotaProcesssadaRepository';

class CreateNotaProcesssada {

    async post(dados: NotaProcessada) { 
        const notaProcesssadaRepository = new NotaProcesssadaRepository()
        Logger.info(`Chave: ${dados.chaveNfe} - `)
        try {
            await notaProcesssadaRepository.create(dados)
        } catch (error) {
            Logger.error({ error })   
        }
    }
    
}

export default CreateNotaProcesssada;