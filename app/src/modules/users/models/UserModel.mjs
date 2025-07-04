import {  DataTypes, Model } from 'sequelize';
import {dbSequelize as sequelize} from "../../../api/database.mjs";

class UserModel extends Model {
    isBlocked(){

        return this.get('active') !== true
    }
    isActive() {
        return this.get('active') === true
    }
    getSalt() {
        return this.get('salt')
    }
    getPassword(){
        return this.get('password')
    }

    static async findOneByEmail(email) {
        return UserModel.findOne({where: {email}})
    }
    static async findOneById(id) {
        return UserModel.findOne({where: {id}})
    }
}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        salt: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        active: {
            type: DataTypes.BOOLEAN,
        },
        role: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'users',
        sequelize,
        modelName: 'UserModel',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
);

export default UserModel