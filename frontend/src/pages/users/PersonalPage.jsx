import {Breadcrumb, Card} from "antd";
import {PAGE_HOME_TITLE, PAGE_PERSONAL_TITLE, TEMPLATES_TITLE} from "../../data/i18n.mjs";
import {useNavigate, useParams} from "react-router";
import { Typography } from 'antd';
import MainLayout from "../../components/layouts/MainLayout.jsx";
import { useEffect} from "react";
import {useSelector} from "react-redux";
import {selectAuth} from "../../store/slices/users/authSlice.mjs";
import TemplateList from "../../components/templates/TemplateList.jsx";
const { Title } = Typography;
function Breadcrumbs(){
    const navigate = useNavigate()
    return (<Breadcrumb className="az-breadcrumb">
        <Breadcrumb.Item onClick={()=>navigate('/')}>{PAGE_HOME_TITLE}</Breadcrumb.Item>
        <Breadcrumb.Item >{PAGE_PERSONAL_TITLE}</Breadcrumb.Item>
    </Breadcrumb>)
}

function UserCard({user}){
    if(!user){
        return (<Card loading={true} title="Account info" ></Card>)
    }
    return ( <Card loading={!user} title="Account info">
        <dl>
            <dt>Email</dt>
            <dd>{user.email}</dd>
            <dt>Name</dt>
            <dd>{user.name}</dd>
            <dt>Role</dt>
            <dd>{user.role}</dd>
        </dl>
    </Card>)
}
function PersonalPage() {
    const navigate = useNavigate()
    const {id : userId = null} = useParams();
    const currentUser = useSelector(selectAuth)
    const isAuth = currentUser.is_auth;

    useEffect(() => {
        if(isAuth === false){
            navigate('/login?referer=/user' + (userId ? '/' + userId: ''))
        }
    }, [isAuth]);


    return (<MainLayout>
        <Breadcrumbs/>
        <Title>{PAGE_PERSONAL_TITLE}</Title>
        <UserCard user={currentUser} />
        <Title level={3}>{TEMPLATES_TITLE}</Title>
        <TemplateList />
    </MainLayout>)
}

export default PersonalPage;