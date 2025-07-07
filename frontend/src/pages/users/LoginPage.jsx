import {NavLink, useNavigate} from 'react-router'
import { Form, Input} from "antd";
import {memo, useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import LoginRegisterLayout from "../../components/layouts/LoginRegisterLayout.jsx";

import {
    ERROR_EMPTY_PASSWORD,
    ERROR_EMPTY_EMAIL,
    FORM_PASSWORD_LABEL, FORM_REGISTER_LINK_LABEL,
    LOGIN_PAGE_TITLE, FORM_EMAIL_LABEL
} from "../../data/i18n.mjs";
import {fetchLogin, selectAuth, selectLoginError, selectStatus} from "../../store/slices/users/authSlice.mjs";
import {t} from "../../api.mjs";




function LoginPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loginStatus = useSelector(selectStatus);
    const currentUser = useSelector(selectAuth);
    const loginError = useSelector(selectLoginError);
    const isLoading = loginStatus === 'loading';

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const [emailValidationResult, setEmailValidationResult] = useState({});
    const [passwordValidationResult, setPasswordValidationResult] = useState({});
    const onEmailChange =  (p) => {
        setEmailValidationResult({})
        setEmail(p.target.value);
    }
    const onPasswordChange =  (p) => {
        setPasswordValidationResult({})
        setPassword(p.target.value);
    }

    useEffect(() => {
        setEmailValidationResult(loginError ? {
            validateStatus: 'error',
            help: getLoginErrorMessage(loginError)
        }: {})
    }, [loginStatus]);

    useEffect(() => {
        console.log('currentUser', currentUser)
      if(currentUser.is_auth){
          navigate('/user/' + currentUser.id)
      }
    }, [currentUser])
    const onSubmit = () =>{
        if(isLoading){
            return;
        }
        if(!validateForm(
            email,
            password,
            setEmailValidationResult,
            setPasswordValidationResult
        )){
            return;
        }
        setEmailValidationResult({})
        setPasswordValidationResult({})
        dispatch(fetchLogin({email, password}))
    }

    return (
        <LoginRegisterLayout title={LOGIN_PAGE_TITLE}>
            <LoginForm onSubmit={onSubmit}>
                <UserInput
                    label={FORM_EMAIL_LABEL}
                    value={email}
                    onChange={onEmailChange}
                    validationResult={emailValidationResult}
                />
                <UserInput
                    inputType="password"
                    label={FORM_PASSWORD_LABEL}
                    onChange={onPasswordChange}
                    validationResult={passwordValidationResult}
                />
                <Form.Item>
                    <SubmitBtn loading={isLoading} />
                </Form.Item>
                <p>Login: admin@example.com, Password: 1</p>
                <Form.Item>
                    <RegisterBtn />
                </Form.Item>

            </LoginForm>
        </LoginRegisterLayout>
    )
}

function getLoginErrorMessage(code) {
    return code ? t(['login_page','errors',code], 'Unknown error'):''
}

function UserInput({inputType = 'input', label,value,onChange, validationResult}){
    return (<Form.Item
        label={label}
        {...validationResult}
    >
        {inputType === 'password'
            ? (<Input.Password value={value} onChange={onChange} />)
            : (<Input value={value} onChange={onChange} />)
        }
    </Form.Item>)
}

const SubmitBtn = ({loading}) => {
    let props = {
        type: 'submit',
        className: 'ant-btn ant-btn-primary ant-btn-block',
    }
    if(loading){
      props.disabled = true
    }
    return (<button {...props}>
        <span>{LOGIN_PAGE_TITLE}</span>
    </button>)
}

const RegisterBtn = memo(()=>{
    return (<NavLink to="/register"
                     className="ant-btn ant-btn-link ant-btn-block">
        {FORM_REGISTER_LINK_LABEL}
    </NavLink>)
})


function LoginForm({ children, onSubmit }) {
    const onFormSubmit = (e) => {
      e.preventDefault();
        onSubmit();
    };
    const className="ant-form ant-form-vertical"
    return (<form autoComplete="off" className={className}
                  onSubmit={onFormSubmit}>{children}</form>)
}

function validateForm(email, password, setUserValidationResult,setPasswordValidationResult) {
    let isValid = true;
    if(!email){
        setUserValidationResult({
            validateStatus: 'error',
            help: ERROR_EMPTY_EMAIL
        })
        isValid = false
    }
    if(!password){
        setPasswordValidationResult({
            validateStatus: 'error',
            help: ERROR_EMPTY_PASSWORD
        })
        isValid = false
    }
    return isValid
}

export default LoginPage
