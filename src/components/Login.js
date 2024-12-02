// src/components/Login.js
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("User Info:", user);
            alert(`Welcome, ${user.displayName}!`);
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Sign in with Google</button>
        </div>
    );
}

export default Login;
