import * as mongoose from "mongoose";

const callbackPayerSchema = new mongoose.Schema({ 
    idNotaProcessada: { type: Number },
    tipoAmbiente: { type: String },
    versaoAplicacao: { type: String },
    chaveNfe: { type: String },
    dataRecebimento: { type: String },
    numeroProtocolo: { type: String },
    digestValue: { type: String },
    codigoStatus: { type: String },
    motivo: { type: String },
    versao: { type: String },
 }, 
 { collection: 'safeWebDocumentoGerado' })

export default callbackPayerSchema;