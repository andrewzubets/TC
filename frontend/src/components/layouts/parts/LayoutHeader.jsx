import {Layout} from "antd";

export default function LayoutHeader({children}) {
    return (<Layout.Header className="az-header">{children}</Layout.Header>)
}