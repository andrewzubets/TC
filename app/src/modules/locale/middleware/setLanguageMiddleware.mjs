export const setLanguageMiddleware = (req, res, next) => {
    res.locals.lng = req.language;
    next();
};