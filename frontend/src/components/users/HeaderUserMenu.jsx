import { Menu } from 'antd'
import {
    UserOutlined as IconUserOutlined,
} from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux'
import {fetchLogout, fetchUser, selectAuth} from "../../store/slices/users/authSlice.mjs";
import {HEADER_MENU_LOGIN_LABEL, HEADER_MENU_LOGOUT_LABEL, PAGE_PERSONAL_TITLE} from "../../data/i18n.mjs";
import { useEffect} from "react";
import {useNavigate} from "react-router";

function getAuthTitle(user) {
    return user.email + ': ' + user.role
}
function HeaderUserMenu(){
    const dispatch = useDispatch()
    const currentUser = useSelector(selectAuth)
    useEffect(() => {
        dispatch(fetchUser())
    }, []);

    if(currentUser.is_auth === false){
        return (<GuestMenu />)
    }
    const logoutClick = () => {
        dispatch(fetchLogout())
    }

    return (<AuthorizedMenu onLogoutClick={logoutClick} user={currentUser} />);
}
function GuestMenu(){
    const navigate = useNavigate();
    const onLoginClick = () => {
        navigate('/login')
    }
    return (<Menu mode="horizontal" inlineCollapsed={false} disabledOverflow={true}>
        <Menu.Item key="one" icon={<IconUserOutlined />} onClick={onLoginClick}>
            {HEADER_MENU_LOGIN_LABEL}
        </Menu.Item>
    </Menu>);
}
function AuthorizedMenu({onLogoutClick, user}){
    const navigate = useNavigate();
    const title = getAuthTitle(user)
    const gotoPersonalPage = () => {
        navigate('/user/' + user.id)
    }
    return (<Menu mode="horizontal" inlineCollapsed={false} disabledOverflow={true}>
        <Menu.SubMenu key="two" icon={<IconUserOutlined />}  title={title}>
            <Menu.Item onClick={gotoPersonalPage}>{PAGE_PERSONAL_TITLE}</Menu.Item>
            <Menu.Item onClick={onLogoutClick}>{HEADER_MENU_LOGOUT_LABEL}</Menu.Item>
        </Menu.SubMenu>
    </Menu>);
}


export default HeaderUserMenu;