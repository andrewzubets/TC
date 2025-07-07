
import express from "express";
import surveyRouter from "./routes/surveyRouter.mjs";


export function setupSurveys(app){
    app.use('/api/survey', surveyRouter)
}