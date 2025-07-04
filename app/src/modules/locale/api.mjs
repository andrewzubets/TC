import i18next from "i18next";
import i18nextFsBackend from "i18next-fs-backend";
import i18nextMiddleware from "i18next-http-middleware";
import path from "node:path";
import {setLanguageMiddleware} from "./middleware/setLanguageMiddleware.mjs";
import localeRouter from "./routes/index.mjs"
function setupLocalization(app){
    i18next
        .use(i18nextFsBackend)                     // Connects the file system backend
        .use(i18nextMiddleware.LanguageDetector) // Enables automatic language detection
        .init({
            backend: {
                loadPath: path.join(process.cwd(), 'src/lang', '{{lng}}', '{{ns}}.json'), // Path to translation files
            },
            detection: {
                order: ['querystring', 'cookie'], // Priority: URL query string first, then cookies
                caches: ['cookie'],               // Cache detected language in cookies
            },
            fallbackLng: 'en',                   // Default language when no language is detected
            preload: ['en', 'pl'],               // Preload these languages at startup
        });
    app.use(
        i18nextMiddleware.handle(i18next)
    );
    app.use(setLanguageMiddleware);
    app.use('/locale', localeRouter);
}

export default setupLocalization;