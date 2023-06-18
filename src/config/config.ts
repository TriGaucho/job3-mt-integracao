import { versao } from '@shared/const/versao'
import 'dotenv/config'

export default {
  versao: versao,
  cors: {
    //TODO revisar politica de CORS
    methods: 'GET, OPTIONS, PUT, POST, DELETE',
    origin: '*'
  }
}
