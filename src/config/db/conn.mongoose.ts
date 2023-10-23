import Logger from "@shared/logger/Logger";
import * as mongoose from "mongoose";

class ConexaoMongo{
    private DB_URL = 'mongodb://job3:123456@127.0.0.1:27017/config'
    
    createConnection() {
        mongoose.connect('mongodb://127.0.0.1:27017/job3',  {
            authSource: "admin",
            user: "job3",
            pass: "123456",
        })
        mongoose.pluralize(null);
        Logger.info("Conectado ao banco de dados")
    }
}

export default ConexaoMongo;