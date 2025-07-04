import fs from "fs";
import {languages} from "../config/lang.mjs";
import {STATIC_ASSETS, VITE_MANIFEST_PATH} from "../config/assets.mjs";



function readViteManifest(){
    if(!fs.existsSync(VITE_MANIFEST_PATH)){
        return null;
    }
    const jsonContent = fs.readFileSync(VITE_MANIFEST_PATH).toString();
    return JSON.parse(jsonContent);
}
function getFrontendAssets() {
    const viteManifest = readViteManifest();
    if(!viteManifest){
        return STATIC_ASSETS;
    }
    return {
        css: '/' + (viteManifest['scss/app.scss']).file,
        js: '/' + (viteManifest['src/main.jsx']).file,
    }
}

function getLocaleDataForFrontend(i18n) {
    const {translation}
        = i18n.getDataByLanguage(i18n.resolvedLanguage)
    return {
        currentLanguage: i18n.resolvedLanguage,
        languages,
        translation
    }
}

export {
    getLocaleDataForFrontend,
    getFrontendAssets
}