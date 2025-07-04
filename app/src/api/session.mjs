import SQLiteStore from 'connect-sqlite3';
import session from 'express-session';
import sessionConfig from '../config/session.mjs';

function sessionPull(session, prop, defaultValue = null){
    const value = session[prop] || defaultValue;
    delete session[prop];
    return value;
}

function connectSqlLiteSessionStore(session, options){
    return new (SQLiteStore(session))(options);
}

function setupSession(app){
    const {store:storeConfig, ...config}
        = sessionConfig;
    const sessionInstance = session({
        ...sessionConfig,
        store: connectSqlLiteSessionStore(session, storeConfig),
    });
    app.use(sessionInstance);
}

function getSessionUser(user) {
    return {id: user.id, email: user.email, role: user.role};
}
export {
    sessionPull,
    setupSession,
    getSessionUser
}