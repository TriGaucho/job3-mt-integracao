import * as mongoose from "mongoose";

const callbackPayerSchema = new mongoose.Schema({ responseCallback: Object }, { collection: 'callbackPayer' })

export default callbackPayerSchema;