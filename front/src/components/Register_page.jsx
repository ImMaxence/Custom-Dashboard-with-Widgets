import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import LoadingSpinnerButton from './LoadingSpinnerRegister';

const Register_page = () => {

    const navigate = useNavigate();
    const [username_input, setUsername] = useState('');
    const [password_input, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [email_input, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleLogin = () => {
        navigate('/');
    }

    function timeout(delay) {
        return new Promise(res => setTimeout(res, delay));
    }

    const handleSubmit = () => {
        let data = { username: username_input, email: email_input, password: password_input };
        console.log(data)
        axios
            .post("http://localhost:8080/api/auth/signup", data)
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setErrMsg("Error, please retry with correct information");
            });
    };

    return (
        <>
            <div className="over_register">
                <div className="register_background">
                </div>
                <h1 id='text_register'>REGISTER</h1>
                <div className="form_register">
                    <p id='user_pad'>USERNAME</p>
                    <input type="text" id='new_user' onChange={handleUsername} />
                    <p>EMAIL</p>
                    <input type="email" id='new_email' onChange={handleEmail} />
                    <p>PASSWORD</p>
                    <input type="password" id='new_pass' onChange={handlePassword} />
                    <div className="but_register">
                        <LoadingSpinnerButton loading={loading} onClick={() => {
                            setErrMsg('Loading...')
                            setLoading(true)
                            setTimeout(() => {
                                setLoading(false)
                                handleSubmit()
                            }, 2000)
                        }} />
                        <button id='register_log' onClick={handleLogin}>LOGIN</button>
                        <span className='error_mssg'>{errMsg}</span>
                    </div>
                    <div className="bg"></div>
                </div>
            </div>
        </>
    );
};

export default Register_page;