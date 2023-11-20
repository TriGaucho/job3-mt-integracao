import * as mongoose from "mongoose";

interface IMessage {
    command: string;
    value: number;
    paymentMethod: string;
    paymentType: string;
    paymentMethodSubType: string;
    installments: number;
}
interface IReceiver {
    companyId: string;
    storeId: string;
    terminalId: string;
}

interface IData {
    correlationId: string;
    flow: string;
    automationName: string;
    callbackUrl: string;
    receiver: IReceiver;
}

interface IPagamento {
    type: string;
    origin: string;
    data: IData;
    message: IMessage;
}

const messageSchema = new mongoose.Schema({
    command: { type: String },
    value: { type: Number },
    paymentMethod: { type: String },
    paymentType: { type: String },
    paymentMethodSubType: { type: String },
    installments: { type: Number },
})

const receiverSchema = new mongoose.Schema({
    companyId: { type: String },
    storeId: { type: String },
    terminalId: { type: String }
})

const dataSchema = new mongoose.Schema({
    correlationId: { type: String },
    flow: { type: String },
    automationName: { type: String },
    callbackUrl: { type: String },
    receiver: { receiverSchema }
})

const pagamentoSchema = new mongoose.Schema({
    type: { type: String },
    origin: { type: String },
    data: { dataSchema },
    message: { messageSchema }
})

// export default pagamentoSchema;

export const Pagamentos = mongoose.model<IPagamento>('pagamento', pagamentoSchema);