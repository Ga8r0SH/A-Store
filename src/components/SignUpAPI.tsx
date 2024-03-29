import React, { useEffect } from "react";
import SignUp from './SignUp';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService/authService";


const SignUpAPI = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login({ username, password })
            .then((data) => {
                localStorage.setItem("access_token", data.token);
                localStorage.setItem("id", data.id.toString())
                navigate(`/homepage/${data.id}`);
            })
            .catch((er) => {
                if (er.response.status === 400) {
                    console.log("Error");
                }
            })
    }

    return (
        <SignUp
            handleSignIn={handleSignIn}
            setUsername={setUsername}
            setPassword={setPassword}
            username={username}
            password={password}
        />
    );
}

export default SignUpAPI;