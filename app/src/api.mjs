import fs from 'fs'
import {errorHandler} from "./api/errors.mjs"
import {getLocaleDataForFrontend,getFrontendAssets} from "./api/frontend.mjs"
import {setupSession} from "./api/session.mjs"
import {setupViews} from './api/views.mjs'
import setupLocalization from "./modules/locale/api.mjs";
import express from "express";
import {setupAuth} from "./modules/users/api.mjs";

function setupApplication(app) {
    setupSession(app)
    setupLocalization(app)
    setupAuth(app)
    setupViews(app)
    app.use(express.static('public'))
}

export {
    getFrontendAssets,
    errorHandler,
    getLocaleDataForFrontend,
    setupApplication
}