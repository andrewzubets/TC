import {Layout} from "antd";
import LangSwitcher from "../LangSwitcher.jsx";
import LayoutHeader from "./parts/LayoutHeader.jsx";
import {memo} from "react";
import HeaderUserMenu from "../users/HeaderUserMenu.jsx";
import SiteTitle from "./parts/SiteTitle.jsx";

function LoginPageWrapper({children}) {
    return (<section className="vh-100">
        <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100 py-5">
                {children}
            </div>
        </div>
    </section>);
}
const ImageCol = memo(function (){
    return (<div className="col-md-9 col-lg-6 col-xl-5">
        <img src="/img/login/draw2.webp"
             className="img-fluid" alt="Log in" />
    </div>);
});
function LoginFormCol({ title, children }) {
    return (<div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 my-3">
        <div className="divider d-flex align-items-center my-3">
            <p className="lead fw-normal mb-0 me-3">{title}</p>
        </div>
        {children}
    </div>)
}

export default function LoginRegisterLayout({title, children}) {
    return (<Layout>
            <LayoutHeader >
                <SiteTitle />
                <div className="d-flex justify-content-end">
                    <HeaderUserMenu />
                    <LangSwitcher />
                </div>
            </LayoutHeader>
            <Layout.Content className="az-main-content-inner">
                <LoginPageWrapper>
                    <ImageCol />
                    <LoginFormCol title={title}>
                        {children}
                    </LoginFormCol>
                </LoginPageWrapper>
            </Layout.Content>
        </Layout>
    );
}