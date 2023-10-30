import Logger from "@shared/logger/Logger";
import * as mongoose from "mongoose";
import 'dotenv/config'

class ConexaoMongo{
    //TODO componentizar e garantir dados de login como variaveis.
    createConnection() {
        const bancoDados = process.env.MONGO_DATABASE
        
        mongoose.connect(`mongodb://localhost/${bancoDados}`,  {
            authSource: "admin",
            user: process.env.MONGO_INITDB_ROOT_USERNAME,
            pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
        })
        mongoose.pluralize(null);
        Logger.info(`Contectado: ${bancoDados}.`)
    }
}

export default ConexaoMongo;