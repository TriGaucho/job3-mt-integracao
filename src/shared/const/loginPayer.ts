import 'dotenv/config'


// export const clientPayer = "3veb9e18d50ceqes38o1i8mlph";
// export const userPayer = "comercial@job3.com.br";
// export const passPayer =  "Mlc090927*"
// export const urlLogin = 'https://bk07exvx19.execute-api.us-east-1.amazonaws.com/dev-stage/oauth/login';
// export const urlValidacaoPagamento = 'https://v4kugeekeb.execute-api.us-east-1.amazonaws.com/prod-stage/cloud-notification/validate-webhook';
// export const urlEnvioPagamento = 'https://v4kugeekeb.execute-api.us-east-1.amazonaws.com/prod-stage/cloud-notification/create';

export const clientPayer = process.env.CLIENT_PAYER
export const userPayer = process.env.USER_PAYER
export const passPayer =  process.env.PASS_PAYER
export const urlLoginPayer = process.env.URL_LOGIN_PAYER
export const urlApiPayer = process.env.URL_API_PAYER

