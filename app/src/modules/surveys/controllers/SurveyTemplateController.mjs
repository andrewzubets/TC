import SurveyTemplateModel from "../models/SurveyTemplateModel.mjs";
import {getSurveyTemplateResponse} from "../api/response.mjs";

export const getTemplatesIndex = async (req, res, send) => {
    const items = await SurveyTemplateModel.findAll()
    const data = {
        items: items.map(item => {
            return getSurveyTemplateResponse(item)
        })
    }
    res.json(data)
}