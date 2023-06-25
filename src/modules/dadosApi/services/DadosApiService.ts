import AppError from '@shared/erros/AppError'
import DadosApi from '../entities/DadosApi'
import DadosApiRepository from '../repositories/DadosApiRepository'

class DadosApiService {
  public async execute(): Promise<DadosApi[]> {
    const dadosApiRepository = new DadosApiRepository()

    const dados = await dadosApiRepository.show()

    if (!dados) throw new AppError('Não foi possível obter os dados de configuração.')

    return dados
  }
}

export default DadosApiService
