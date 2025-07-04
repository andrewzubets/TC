export default {
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    store: {
        db: 'sessions.sqlite',
        dir: process.env.SESSION_DIR
    }
}