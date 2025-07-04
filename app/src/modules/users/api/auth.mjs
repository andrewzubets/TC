import UserModel from "../models/UserModel.mjs";
import { isLoginPasswordsMatch} from "./security.mjs";
import {getSessionUser} from "../../../api/session.mjs";

const AUTH_REDIRECT = '/login';

function verifyBadUserError(verifyCallback, isNotExists){

    verifyCallback(null, false, {
        code: isNotExists
            ? 'not_registered'
            : 'blocked'
    });
}
function verifySuccess(verifyCallback, user){
    verifyCallback(null, getSessionUser(user));
}
function verifyError(verifyCallback, code) {
    verifyCallback(null, false, {code});
}
export async function loginVerifyPassword(email, password, cb) {
    try {
        const user = await UserModel.findOneByEmail(email);

        if (!(user instanceof UserModel)) {
            return verifyBadUserError(cb, true);
        }
        if (user.isBlocked()) {
            return verifyBadUserError(cb, false);
        }
        if (isLoginPasswordsMatch(user, password)) {
            return verifySuccess(cb, user);
        }
        return verifyError(cb, 'wrong_credentials');
    }
    catch (error) {
        console.error(error);
        verifyError(cb, 'database_error')
    }
}

async function authorizeRequest(req, res, next, isJson = false) {
    if(
        !authorizeAuthRequest(req, res, isJson)
        || !authorizeValidSessionRequest(req, res, isJson)
        || !await authorizeActiveUserRequest(req, res, isJson)
    ){
        return;
    }
    next();
}


function authorizeAuthRequest(req,res, isJson = false) {
    if (req.isAuthenticated && req.isAuthenticated()) {
        return true;
    }
    if(isJson) {
        res.json(getUnAuthResponse({}, AUTH_REDIRECT));
    }else{
        res.redirect(AUTH_REDIRECT);
    }
}

function authorizeValidSessionRequest(req,res, isJson = false) {
    if(req.user && Number.isInteger(req.user.id)) {
        return true;
    }
    logout(req, res,false, !isJson);
    if(isJson){
        res.json(getUnAuthResponse({reason: 'nos'}, AUTH_REDIRECT));
    }
}
function logout(req, res, next, withRedirect = true, redirectTo = '/login'){
    req.logout(function(err) {
        if (err && next instanceof Function) { return next(err); }
        if(withRedirect) { res.redirect(redirectTo);}
    });
}

export async function authorizeJsonRequest(req, res, next) {
    return authorizeRequest(req,res,next, true);
}

async function authorizeActiveUserRequest(req,res, isJson = false) {
    const user = await UserModel.findOneById(req.user.id);
    if(user && user.isActive()){
        return true;
    }
    logout(req, res,false, !isJson, AUTH_REDIRECT + '?from=blocked');
    if(isJson){
        res.status(401).json(getUnAuthResponse({
            reason: !user ? 'deleted' : 'blocked',
            redirect: AUTH_REDIRECT + '?from=blocked',
        }));
    }
}

function getUnAuthResponse(data, redirect){
    return {
        success: false,
        code: 'unauthorized',
        ...data,
        redirect
    };
}