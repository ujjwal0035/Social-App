import './register.css';

const Register = () => {
    return (
        <>
        <div className="loginPageContainer">
            <div className="SocialApp">Social App</div>
            <div className="loginBoxWithLabel">
                <h1>Sign up</h1>
                <p className="subHeading">Stay Connected with Your Friends and Family</p>
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput " />
                    <input placeholder="Email" className="loginInput " />
                    <input placeholder="Password" className="loginInput " />
                    <input placeholder="Password Again" className="loginInput " />
                    <button className="loginButton ">Sign Up</button>
                    {/* <div className="backLogin">
                        Already on Social App? <span className="Login">Log in</span>
                    </div> */}
                    
                </div>
                <div className="backLogin">
                        Already on Social App? <span className="Login">Log in</span>
                    </div>
            </div>
        </div>
        </>
    );
};

export default Register;