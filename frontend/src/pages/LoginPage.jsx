import { NavLink } from 'react-router'


function LoginPage() {

    return (
        <LoginForm>
            <Title>Login</Title>
            <EmailInput />
            <PasswordInput />
            <RememberMeBlock />

            <div className="text-center text-lg-start mt-4 pt-2">
                <LoginBtn>Login</LoginBtn>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                    <NavLink to="/register" className="link-danger">Register</NavLink>
                </p>
            </div>
        </LoginForm>
    )
}

function LoginBtn(props) {
    const loginBtnStyle = {
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem'
    }

    return (<button type="button"
                    className="btn btn-primary btn-lg"
                    style={loginBtnStyle}>{props.children}</button>);
}
function EmailInput(props){
    return (<div className="form-outline mb-3">
        <input type="password" id="form3Example4" className="form-control form-control-lg"
               placeholder="Enter password" />
        <label className="form-label" htmlFor="form3Example4">Password</label>
    </div>);
}

function PasswordInput(props) {
    return (<div className="form-outline mb-4">
        <input type="email" id="form3Example3"
               className="form-control form-control-lg"
               placeholder="Enter a valid email address" />
        <label className="form-label" htmlFor="form3Example3">Email address</label>
    </div>)
}
function ImageBlock(props){
    return (<div className="col-md-9 col-lg-6 col-xl-5">
        <img src="/img/login/draw2.webp"
             className="img-fluid" alt="Sample image" />
    </div>);
}

function Title({children}) {
    return (<div className="divider d-flex align-items-center my-3">
        <p className="lead fw-normal mb-0 me-3">{children}</p>
    </div>)
}

function RememberMeBlock(props) {
    return (<div className="d-flex justify-content-between align-items-center">
        <div className="form-check mb-0">
            <input className="form-check-input me-2" type="checkbox" value=""
                   id="form-remember-me" />
            <label className="form-check-label" htmlFor="form-remember-me">
                Remember me
            </label>
        </div>
    </div>);
}
function LoginForm({ children }) {
    return (<section className="vh-100">
        <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100 py-5">
                <ImageBlock />
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 my-3">
                    <form>
                        {children}
                    </form>
                </div>
            </div>
        </div>
    </section>)
}

export default LoginPage
