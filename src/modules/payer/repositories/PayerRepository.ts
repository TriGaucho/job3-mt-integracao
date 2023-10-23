import * as mongoose from "mongoose";
import callbackPayerSchema from "../entities/PayerAny";

export default mongoose.model('callbackPayer', callbackPayerSchema);