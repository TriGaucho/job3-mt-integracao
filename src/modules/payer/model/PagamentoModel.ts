import * as mongoose from "mongoose";

const receiverSchema = new mongoose.Schema({
    companyId: { trype: String },
    storeId: { trype: String },
    terminalId: { trype: String },
})

const messageSchema = new mongoose.Schema({
    command: { trype: String },
    value: { type: Number },
    paymentMethod: { trype: String },
    paymentType: { trype: String },
    paymentMethodSubType: { trype: String },
    installments: { type: Number },
})

const pagamentoSchema = new mongoose.Schema({
    origin: { trype: String },
    correlationId: { trype: String },
    receiver: { type: receiverSchema },
    message: { type: messageSchema }
})

export default pagamentoSchema;