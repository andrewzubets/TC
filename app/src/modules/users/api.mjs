import authRouter from "./routes/authRouter.mjs";
import passport from "passport";
import express from "express";


export function setupAuth(app){
    app.use(passport.authenticate('session'))
    app.use(express.urlencoded({ extended: false }))
    app.use('/api/user', authRouter)
}