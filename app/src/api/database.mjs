import {Sequelize} from 'sequelize';
import databaseConfig from '../config/database.mjs';

const getDbSequelize = () => {
    return new Sequelize(
        databaseConfig.database,
        databaseConfig.user,
        databaseConfig.password,
        {
            host: databaseConfig.host,
            dialect: databaseConfig.dialect
        }
   );
}

const dbSequelize = getDbSequelize()

export {
    getDbSequelize,
    dbSequelize
}