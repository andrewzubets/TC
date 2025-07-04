import { Router } from 'express';
import {changeLanguageHandler} from "../controllers/languageController.mjs";

const router = Router();
router.get('/change', changeLanguageHandler);
export default router;