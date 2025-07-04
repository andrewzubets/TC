import express, { Router } from 'express';
import passport from "passport";
import LocalStrategy from 'passport-local';
import {loginHandler, logoutHandler} from "../controllers/AuthController.mjs";
import {authorizeJsonRequest, loginVerifyPassword} from "../api/auth.mjs";
import {passportDeserializeUser, passportSerializeUser} from "../api/passport.mjs";


const router = Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

passport.use('local',
    new LocalStrategy({usernameField: 'email'}, loginVerifyPassword)
);
passport.serializeUser(passportSerializeUser);
passport.deserializeUser(passportDeserializeUser);

router.post('/login',loginHandler);

router.post('/logout', logoutHandler);


router.get('/',
    authorizeJsonRequest,
    (req,res,next) => {
    res.json({
        success: true,
        user: req.user
    })
})

export default router;