import * as mongoose from "mongoose";


interface IPagamento {
  type: string;
  origin: string;
  data: {
    correlationId: string;
    flow: string;
    automationName: string;
    callbackUrl: string;
    receiver: {
      companyId: string;
      storeId: string;
      terminalId: string;
    },
    message: {
      command: string;
      value: string;
      paymentMethod: string;
      paymentType: string;
      paymentMethodSubType: string;
      installments: number;
    }
  }
}

const pagamentoSchema = new mongoose.Schema({
  type: { type: String },
  origin: { type: String },
  data: {
    correlationId: { type: String },
    flow: { type: String },
    automationName: { type: String },
    callbackUrl: { type: String },
    receiver: {
      companyId: { type: String },
      storeId: { type: String },
      terminalId: { type: String }
    },
    message: {
      command: { type: String },
      value: { type: String },
      paymentMethod: { type: String },
      paymentType: { type: String },
      paymentMethodSubType: { type: String },
      installments: { type: Number },
    }
  },
})

// export default pagamentoSchema;

export const Pagamentos = mongoose.model<IPagamento>('pagamento', pagamentoSchema);
