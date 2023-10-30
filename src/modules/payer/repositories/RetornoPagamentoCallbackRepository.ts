import * as mongoose from "mongoose";
import callbackPayerSchema from "../model/CallbackModel";

export default mongoose.model('callbackPayer', callbackPayerSchema);

