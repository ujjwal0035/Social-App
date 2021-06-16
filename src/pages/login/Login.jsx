import './login.css';

const Login = () => {
    return (
        <>
        <div className="loginPageContainer">
            <div className="SocialApp">Social App</div>
            <div className="loginBoxWithLabel">
                <h1>Sign in</h1>
                <p className="subHeading">Stay Connected with Your Friends and Family</p>
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                    Create a New Account
                    </button>
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;