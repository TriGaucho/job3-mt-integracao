import Logger from "@shared/logger/Logger";
import * as mongoose from "mongoose";
import 'dotenv/config'

class ConexaoMongo{
    //TODO componentizar e garantir dados de login como variaveis.
    createConnection() {
        const bancoDados = process.env.MONGO_DATABASE
        const userName = process.env.MONGO_INITDB_ROOT_USERNAME
        const pass = process.env.MONGO_INITDB_ROOT_PASSWORD
        
        mongoose.connect(`mongodb://localhost/${bancoDados}`,  {
            authSource: "admin",
            user: userName,
            pass: pass,
        })
        mongoose.pluralize(null);
        Logger.info(`Contectado em ${bancoDados}/${userName}.`)
    }
}

export default ConexaoMongo;