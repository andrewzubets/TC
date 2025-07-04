import {Button, Result} from "antd";
import {NavLink} from "react-router";
import {t} from "../../api.mjs";

function BackHome({label}){
    return (<NavLink to="/" className="ant-btn ant-btn-primary text-decoration-none">{label}</NavLink>)
}

function getTranslations() {
    const title = t(['error404'],
        "Sorry, the page you visited does not exist.")
    const back_home_btn = t(['error_page','back_home_btn'],
        "Back home")

    return {
        title,
        back_home_btn
    }
}

function Page404(){

    const translations = getTranslations();

    return (<Result
        status="404"
        title="404"
        subTitle={translations.title}
        extra={
        <BackHome label={translations.back_home_btn} />
    }
    />)
}

export default Page404;