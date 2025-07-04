import {  DataTypes, Model } from 'sequelize';
import {dbSequelize as sequelize} from "../api/database.mjs";
class TestModel extends Model {}

TestModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        value: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        tableName: 'test',
        sequelize,
        timestamps: false,
        modelName: 'TestModel'
    },
);

export default TestModel