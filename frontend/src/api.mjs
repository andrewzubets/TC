
 function t(levels,defaultValue = '') {
    if(!window.i18n?.translation){
        return defaultValue;
    }
    let value = window.i18n?.translation;
    for(let k in levels){
        const level = levels[k]
        if(value[level]){
            value = value[level]
        }else{
            return defaultValue
        }
    }
    return value
}
export {
    t
}