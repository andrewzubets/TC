import {memo} from "react";
import {CURRENT_LANGUAGE, LANGUAGES} from "../data/i18n.mjs";

const styleLangSwitcher = {

}


function switchLanguage(code, href) {
    if (code !== CURRENT_LANGUAGE) {
        window.location.href = href + '&referer=' + window.location.pathname
    }
}
function LangSwitcher(){
    return (<ul className="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-light" style={styleLangSwitcher}>
        {LANGUAGES.map((language, key) => {
            return (<LangSwitcherLink key={key} {...language} />)
        })}
    </ul>)
}

function LangSwitcherLink({code, label, href}){
    const className = "ant-menu-overflow-item ant-menu-item ant-menu-item-only-child ";
    const activeClass = code === CURRENT_LANGUAGE ? "ant-menu-item-selected" : "";
    return (<li className={className + activeClass} onClick={() => switchLanguage(code,href)}>
        <span className="ant-menu-title-content" >{label}</span>
    </li>)
}


export default memo(LangSwitcher);