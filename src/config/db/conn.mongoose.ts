import Logger from "@shared/logger/Logger";
import * as mongoose from "mongoose";
import 'dotenv/config'

class ConexaoMongo{
    //TODO componentizar e garantir dados de login como variaveis.
    createConnection() {
        const bancoDados = process.env.MONGO_DATABASE
        const userName = process.env.MONGO_INITDB_ROOT_USERNAME
        const pass = process.env.MONGO_INITDB_ROOT_PASSWORD

        mongoose.connect(`mongodb://${userName}:${pass}@localhost/${bancoDados}`)
        mongoose.pluralize(null);
        Logger.info(`Conectado em ${bancoDados}/${userName}.`)
    }
}

export default ConexaoMongo;
