import axios from "axios";
import React, { useState } from "react";
import Form from "../components/Form";
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
const Signup = ({ setMessage, setclassName, setShow }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      'username':username,
      'email': email,
      'password':password,
      'password2': password2
    };
    axios
      .post('http://localhost:8000/rest-auth/register/', loginData)
      .then((res) => {
        console.log(res)
        setShow(true)
        setclassName(`info`)
        setMessage(`${username} has been successfully registered.`);
      })
      .catch((err) => {
        let error = err.response.data;
        console.log(error);
        setclassName('danger');
        setShow(true)
        if(error.username){
          setMessage(error.username);
        }
        else if(error.email){
          setMessage(error.email);
        }
      });
  };
  return (
    <>
      <Form
        buttonText="Signup"
        text="Already have an account? Log in"
        method="post"
        onSubmit={(e) => handleSubmit(e)}
        link="/login"
        inputField={
          <>
            <div className="form-group col-md-12">
              <label htmlFor="name">Username</label>
              <input
                type="username"
                name="username"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword1(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="name">Confirm Password</label>
              <input
                type="password"
                name="password2"
                className="form-control"
                id="password2"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </div>
          </>
        }
      />
    </>
  );
};
export default Signup;
