import fs from 'fs'

const VITE_MANIFEST_PATH = process.cwd() + '/public/.vite/manifest.json';


function readJson(path){
    if(!fs.existsSync(path)){
        return null;
    }
    const jsonContent = fs.readFileSync(path).toString();
    return JSON.parse(jsonContent);
}
function getFrontendAssets() {
    const viteManifest = readJson(VITE_MANIFEST_PATH);
    if(!viteManifest){
        return {};
    }
    return {
        css: '/' + (viteManifest['scss/app.scss']).file,
        js: '/' + (viteManifest['src/main.jsx']).file,
    }
}

export {
    getFrontendAssets
}