import * as mongoose from "mongoose";

const callbackPayerSchema = new mongoose.Schema({
    idDocumentoGerado: { type: Number },
    documento: { type: String },
    numero: { type: String },
    chaveNfe: { type: String },
    urlDanfe: { type: String },
    urlXml: { type: String },
},
    { collection: 'safeWebNotaProcessada' })

export default callbackPayerSchema;