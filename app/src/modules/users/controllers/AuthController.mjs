import passport from "passport";
import {getSessionUser} from "../../../api/session.mjs";
import {getUserModelResponse} from "../api/response.mjs";
import UserModel from "../models/UserModel.mjs";


export function logoutHandler(req, res, next){
    req.logout(function(err) {
        if (err) {
            return res.json({
                "success": false,
                "message": err.message,
                "code": err.code
            })
        }
        return res.status(204).send()
    });
}

export function loginHandler(req, res, next) {
    passport.authenticate('local', function(error, user, info) {
        if(error) {
            return res.status(500).json(error);
        }
        if(!user) {
            return res.status(401).json({
                "success": false,
                "code": info.code,
            });
        }
        req.login(getSessionUser(user), async function (err) {
            if (err) {
                console.error('err', err)
                return res.json({
                    "success": false,
                    "error": err,
                })
            }
            res.json({
                "success": true,
                "user": getUserModelResponse(await UserModel.findOneById(user.id)),
            })
        })
    })(req, res, next)
}