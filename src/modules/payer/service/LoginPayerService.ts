import axios from 'axios'
import { passPayer, urlLogin, userPayer, clientPayer } from '@shared/const/loginPayer';
import AppError from '@shared/erros/AppError';
import Logger from '@shared/logger/Logger';

class LoginPayerService {
    public async loginPayer() {
        try {
            const resp = await axios.post(urlLogin, {
                clientId: clientPayer,
                username: userPayer,
                password: passPayer
            })
            if (!resp.data.AuthenticationResult.IdToken) throw new AppError('Não foi possível se autenticar na Payer.')
            return resp.data.AuthenticationResult.IdToken
        } catch (error) {
            Logger.error(error)
            throw new AppError('Não foi possível se autenticar na Payer.')
        }
    }
}

export default LoginPayerService
