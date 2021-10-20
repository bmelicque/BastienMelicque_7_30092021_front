import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = props => {
    const { handleLogin } = props;
    const [signUpModal, setSignupModal] = useState(false); // User lands on 'Login' by default

    return (
        <div className="auth">
            {signUpModal ?
                <Signup handleLogin={handleLogin} /> :
                <Login handleLogin={handleLogin} />}

            <a href="/"
                className="auth__change-link"
                onClick={e => {
                    e.preventDefault();
                    setSignupModal(!signUpModal);
                }}>
                {signUpModal ? 'Se connecter' : "S'inscrire"}
            </a>
        </div>
    )
}

export default Auth;