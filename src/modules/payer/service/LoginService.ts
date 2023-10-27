import axios from 'axios'

class LoginService {
    public async post(clientId: string, username: string, password: string) {
        const url = 'https://bk07exvx19.execute-api.us-east-1.amazonaws.com/dev-stage/oauth/login';
        const body = { clientId, username, password }
        try {
            const resp = await axios.post(url, body)
            return resp.data
        } catch (error) {
            return error
        }
    }
}

export default LoginService
