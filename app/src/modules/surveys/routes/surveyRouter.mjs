import {Router} from "express";
import {getTemplatesIndex} from "../controllers/SurveyTemplateController.mjs";
import {authorizeJsonRequest} from "../../users/api/auth.mjs";

const router = Router();

router.get('/templates', authorizeJsonRequest, getTemplatesIndex)
export default router;