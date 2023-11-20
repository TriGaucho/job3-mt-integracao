import * as mongoose from "mongoose";
interface ICallback {
    tenantId: string
    correlationId: string;
    origin: string;
    idPayer: string;
    operationType: string;
    companyId: string;
    storeId: string;
    terminalId: string;
    transactionDateTime: string;
    value: number;
    paymentType: string;
    paymentMethod: string;
    paymentMethodSubType: string;
    installments: number;
    paymentDate: string;
    statusTransaction: string;
    rejectionInfo: string;
    acquirer: string;
    flag: string;
    thirdPartyId: string;
    authorizerId: string;
    authorizerUsn: string;
    documentNumber: string;
    service: string;
    shopTextReceipt: string;
    customerTextReceipt: string;
    reducedShopPaymentReceipt: string;
    reducedCustomerPaymentReceipt: string;
}
const callbackShcema = new mongoose.Schema({
    tenantId: { type: String },
    correlationId: { type: String },
    origin: { type: String },
    idPayer: { type: String },
    operationType: { type: String },
    companyId: { type: String },
    storeId: { type: String },
    terminalId: { type: String },
    transactionDateTime: { type: String },
    value: { type: Number },
    paymentType: { type: String },
    paymentMethod: { type: String },
    paymentMethodSubType: { type: String },
    installments: { type: Number },
    paymentDate: { type: String },
    statusTransaction: { type: String },
    rejectionInfo: { type: String },
    acquirer: { type: String },
    flag: { type: String },
    thirdPartyId: { type: String },
    authorizerId: { type: String },
    authorizerUsn: { type: String },
    documentNumber: { type: String },
    service: { type: String },
    shopTextReceipt: { type: String },
    customerTextReceipt: { type: String },
    reducedShopPaymentReceipt: { type: String },
    reducedCustomerPaymentReceipt: { type: String }
})

export const CallbackPayer = mongoose.model<ICallback>('callbackPayer', callbackShcema);