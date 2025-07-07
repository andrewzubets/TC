import {t} from "../api.mjs";

export const LOGIN_PAGE_TITLE = t(['login_page','login'],'Log in')
export const ERROR_EMPTY_EMAIL = t(['login_page','errors','enter_email'],'Please enter email')
export const ERROR_EMPTY_PASSWORD = t(['login_page','errors','enter_password'],'Please enter password')
export const FORM_EMAIL_LABEL = t(['login_page','email'],'Email')
export const FORM_PASSWORD_LABEL = t(['login_page','password'],'Password')
export const FORM_REGISTER_LINK_LABEL = t(['login_page','register_link'],'Register')

export const HEADER_MENU_LOGIN_LABEL = t(['header_user','login'],'Log in')
export const HEADER_MENU_LOGOUT_LABEL = t(['header_user','logout'],'Log out')

export const PAGE_HOME_TITLE = t(['pages','home'],'Home')
export const PAGE_PERSONAL_TITLE = t(['pages','personal'],'Home')

export const TEMPLATES_TITLE = t(['templates','title'],'Templates')

export const VISIBILITY_HIDDEN_LABEL = t(['templates','visibility','hidden'],'Hidden')
export const VISIBILITY_RESTRICTED_LABEL = t(['templates','visibility','restricted'],'Restricted')
export const VISIBILITY_PUBLIC_LABEL = t(['templates','visibility','public'],'Public')

export const VISIBILITY_LABELS = {
    1 : VISIBILITY_HIDDEN_LABEL,
    2 : VISIBILITY_RESTRICTED_LABEL,
    3 : VISIBILITY_PUBLIC_LABEL
}


export const LANGUAGES = window.i18n?.languages || [{
    code: 'en',
    href: '/locale/change?lng=en',
    label: 'En',
},{
    code: 'pl',
    href: '/locale/change?lng=pl',
    label: 'Pl',
}]
export const CURRENT_LANGUAGE = window.i18n?.currentLanguage || 'en'