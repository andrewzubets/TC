import {isApiRequest} from "./request.mjs";

const HTTP_CODES = {
    SERVER_ERROR: 500,
};
const databaseMessageCodes = [
    'ECONNREFUSED',
    'ER_CON_COUNT_ERROR',
    'ECONNRESET',
    'ETIMEDOUT',
]
function getErrorMessage(code, req) {
    if(databaseMessageCodes.includes(code)){
        return req.t('db_error.' + code);
    }
    return req.t('error_page.server_error_title')
}
const errorHandler = (err, req, res, next) => {

    const code = err.code;
    const message = getErrorMessage(code, req);
    console.log('error: ',err);
    const errorData = {
        error: message,
        code,
    };
    if(isApiRequest(req)){
        res.status(HTTP_CODES.SERVER_ERROR).json(errorData);
    }else{
        res.status(HTTP_CODES.SERVER_ERROR).render('errors/error.twig', {
            errorData,
            backHomeLabel: req.t('error_page.back_home_btn')
        });
    }

    if(!message){
        console.error(err);
    }
};

export {
    errorHandler
}