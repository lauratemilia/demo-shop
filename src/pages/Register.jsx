import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../config/firebase";
import "./Register.css";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return(
        <div>
            <div>
                <h1>Register</h1>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/reset'>Reset</Link>
                <div className="register">
            </div>
            <div className="registerContainer">
                <input
                type="text"
                className="registerTextBox"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                />
                <input
                type="text"
                className="registerTextBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
                />
                <input
                type="password"
                className="registerTextBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                />
                <button className="registerBtn" onClick={register}>
                Register
                </button>
                <button
                className="registerBtn registerGoogle"
                onClick={signInWithGoogle}
                >
                Register with Google
                </button>
                <div>
                Already have an account? <Link to="/">Login</Link> now.
                </div>
            </div>
            </div>
        </div>
    );
}

export default Register;