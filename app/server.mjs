import express from 'express'
import mysql from 'mysql2'

import {
    getFrontendAssets,
    errorHandler,
    getLocaleDataForFrontend,
    setupApplication
}
    from './src/api.mjs'

import setupLocalization from "./src/modules/locale/api.mjs";

import {isApiRequest, isAssetRequest} from "./src/api/request.mjs";
import {dbSequelize} from "./src/api/database.mjs";
import {getPreloadedState} from "./src/api/preloadedState.mjs";
import SurveyQuestionModel from "./src/modules/surveys/models/SurveyQuestionModel.mjs";

const app = express()
setupApplication(app)

app.get('/test',async (req, res) => {
    const id = 1;
    const surveyModel =
        await SurveyQuestionModel.findOne({where: {id}})
    res.json(surveyModel)
})
app.use(async (req, res) => {
    if (isAssetRequest(req) || isApiRequest(req)) {
        return res.status(404).send();
    }

    return res.render('react', {
        i18n: getLocaleDataForFrontend(req.i18n),
        frontendAssets: getFrontendAssets(),
        preloadedState: await getPreloadedState(req),
    });
})



app.use(errorHandler);
app.listen(3000, () => {
    console.log(`App listening on port 3000`)
})
