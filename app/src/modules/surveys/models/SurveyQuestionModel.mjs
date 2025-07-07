import {  DataTypes, Model } from 'sequelize';
import {dbSequelize as sequelize} from "../../../api/database.mjs";
import SurveyTemplateModel from "./SurveyTemplateModel.mjs";
class SurveyQuestionModel extends Model {}

SurveyQuestionModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        template_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'survey_questions',
        sequelize,
        modelName: 'SurveyQuestionModel',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
);

// SurveyQuestionModel.belongsTo(SurveyTemplateModel, {
//     foreignKey: 'template_id',
// });

export default SurveyQuestionModel