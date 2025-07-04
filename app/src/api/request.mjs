import {ASSET_DIRECTORIES} from "../config/assets.mjs";

function isApiRequest(req){
    const url = req.originalUrl || req.url;
    return url && url.startsWith('/api');
}
function isAssetRequest(req){
    const path = req.path
    ASSET_DIRECTORIES.forEach(dir => {
        if(path.startsWith(dir)){
            return true
        }
    })
    return false
}

export {
    isApiRequest,
    isAssetRequest
}