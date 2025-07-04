export const changeLanguageHandler = (req, res) => {
    const { lng } = req.query
    res.cookie('i18next', lng)

    const redirectPath = req.get('referrer') || '/'
    res.redirect(redirectPath)
};