import {Layout} from "antd";
import LangSwitcher from "../LangSwitcher.jsx";
import LayoutHeader from "./parts/LayoutHeader.jsx";
import HeaderUserMenu from "../users/HeaderUserMenu.jsx";
import SiteTitle from "./parts/SiteTitle.jsx";

export default function MainLayout({children}){

    return ( <Layout>
        <LayoutHeader>
            <SiteTitle/>
            <div className="d-flex justify-content-end">
                <HeaderUserMenu/>
                <LangSwitcher/>
            </div>
        </LayoutHeader>
        <Layout.Content className="az-main-content" >
            <div className="az-main-content-inner">
                {children}
            </div>
        </Layout.Content>
    </Layout>
);
}