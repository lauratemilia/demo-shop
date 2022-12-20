import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // eslint-disable-next-line
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/dashboard");
        return () => {
          //setState({}); // This worked for me
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user, loading]);

    return(
        <div>
           <div>
                <h1>Login</h1>            
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
           </div>

           <div className="login">
                <div className="loginContainer">
                    <input
                    type="text"
                    className="loginTextBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                    />
                    <input
                    type="password"
                    className="loginTextBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    />
                    <button
                    className="loginBtn"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                    >
                    Login
                    </button>
                    <button className="loginBtn loginGoogle" onClick={signInWithGoogle}>
                    Login with Google
                    </button>
                    <div>
                    <Link to="/reset">Forgot Password</Link>
                    </div>
                    <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Login;