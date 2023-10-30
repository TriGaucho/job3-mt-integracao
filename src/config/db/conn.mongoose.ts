import Logger from "@shared/logger/Logger";
import * as mongoose from "mongoose";
import 'dotenv/config'

class ConexaoMongo{
    
    //TODO componentizar e garantir dados de login como variaveis.
    createConnection() {
        mongoose.connect('mongodb://localhost/job3',  {
            authSource: "admin",
            user: process.env.MONGO_INITDB_ROOT_USERNAME,
            pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
        })
        mongoose.pluralize(null);
        Logger.info("Conectado ao banco de dado noSql.")
    }
}

export default ConexaoMongo;