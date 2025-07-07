import {  DataTypes, Model } from 'sequelize';
import {dbSequelize as sequelize} from "../../../api/database.mjs";
import SurveyQuestionModel from "./SurveyQuestionModel.mjs";
class SurveyTemplateModel extends Model {}

SurveyTemplateModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visibility: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'survey_templates',
        sequelize,
        modelName: 'SurveyTemplateModel',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
);

// SurveyTemplateModel.hasMany(SurveyQuestionModel, {
//     foreignKey: 'template_id',
// })
export default SurveyTemplateModel