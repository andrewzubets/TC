import SurveyTemplateModel from "../models/SurveyTemplateModel.mjs";

export function getSurveyTemplateResponse(surveyTemplate) {
    if(surveyTemplate instanceof SurveyTemplateModel) {
        return {
            id: surveyTemplate.id,
            visibility: surveyTemplate.visibility,
            name: surveyTemplate.name,
            description: surveyTemplate.description,
            created_at: surveyTemplate.created_at,
            updated_at: surveyTemplate.updated_at,
        }
    }
    return null
}