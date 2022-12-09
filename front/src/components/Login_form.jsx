import React from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import LoadingSpinnerButton from "./LoadingSpinnerButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login_form = () => {
  const [eye, setEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username_input, setUsername] = useState("");
  const [password_input, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    let data = { username: username_input, password: password_input };
    axios
      .post("http://localhost:8080/api/auth/signin", data)
      .then((response) => {
        console.log(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setErrMsg("Username or password is wrong");
      });
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const change_eye = () => {
    setEye((prevState) => !prevState);
  };

  return (
    <>
      <div className="over_container">
        <div className="flex_login">
          <div className="form_login">
            <h3>LOGIN</h3>
            <p id="text_user">USERNAME</p>
            <input
              id="username"
              type="text"
              placeholder="Enter your Username"
              onChange={handleUsername}
            />
            <p id="text_pass">PASSWORD</p>
            <div className="wrapper">
              <input
                id="password"
                placeholder="Enter your Password"
                className="password_field"
                type={eye ? "text" : "password"}
                onChange={handlePassword}
              />
              <button className="btn" onClick={change_eye}>
                {eye ? (
                  <AiOutlineEye size={"2vw"} />
                ) : (
                  <AiOutlineEyeInvisible size={"2vw"} />
                )}
              </button>
            </div>
            <div className="flex_button_login">
              <LoadingSpinnerButton
                title={"SUBMIT"}
                loading={loading}
                onClick={() => {
                  setErrMsg("Loading...");
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    handleSubmit();
                  }, 2000);
                }}
              />
              <button id="reg" onClick={handleRegister}>
                OR REGISTER...
              </button>
              <span className='error_mssg'>{errMsg}</span>
            </div>
          </div>
          <div className="text_login">
            <h1>YOUR CUSTOM DASHBOARD</h1>
            <p>ⓒM²S Team</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_form;
