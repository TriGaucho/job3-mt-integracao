import axios from 'axios'
import { passPayer, urlLoginPayer, userPayer, clientPayer } from '@shared/const/loginPayer';
import AppError from '@shared/erros/AppError';
import Logger from '@shared/logger/Logger';

class LoginPayerService {
    public async loginPayer() {
        try {
            const resp = await axios.post(urlLoginPayer!, {
                clientId: clientPayer,
                username: userPayer,
                password: passPayer
            })
            if (!resp.data.AuthenticationResult.IdToken) throw new AppError('Não foi possível se autenticar na Payer.')
            return resp.data.AuthenticationResult.IdToken
        } catch (error) {
            Logger.error(JSON.stringify(error))
            console.error(JSON.stringify(error))
            throw new AppError('Erro ao tentar se autenticar na Payer.')
        }
    }
}

export default LoginPayerService
