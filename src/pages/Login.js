/* eslint-disable jsx-a11y/no-redundant-roles */
import Form from "../components/Form";
import axios from 'axios';
import React, {useState} from 'react';
import { redirect } from "react-router-dom";
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Login = ({ setToken, setUser, setId, setMessage, setclassName, setShow, setSuperuser}) => {
  const [username, setUsename] = useState('');
  const [password, setPassword] = useState('');

  const LoginSubmit = e =>{
    e.preventDefault();

    const loginData = {
      'username':username,
      'password':password
    };
    axios.post('http://localhost:8000/rest-auth/signin/', loginData)
    .then(res => {
      let authToken = localStorage.setItem('token', res.data.token);
      setToken(authToken);
      let authId = localStorage.setItem('user_id', res.data.user_id);
      setId(authId);
      let authUser = localStorage.setItem('user', username);
      setUser(authUser);
      if(res.data.is_superuser === true){
        let authAdmin = localStorage.setItem('is_superuser', res.data.is_superuser);
        setSuperuser(authAdmin);
      }
      else{
        setSuperuser(false);
      }
      console.log(`
        ${authToken}, 
        ${authId},
        ${username},
      `);
      console.log(res.data.is_superuser)
      setShow(true)
      setclassName(`info`);
      setMessage(`Successfully logged in as ${username}.`);
      redirect()
    })
    .catch(error =>{
      console.log(error);
      setShow(true)
      setclassName(`danger`);
      setMessage('You have entered invalid username or password');
    });
  };
  return (
    <>
      <Form
        method="post"
        buttonText="login"
        text="Dont have an account? Sign up"
        link="/signup"
        onSubmit={LoginSubmit}
        inputField={
          <>
            <div className="form-group col-md-12">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                value={username}
                onChange={e => setUsename(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </>
        }
      />
    </>
  );
};
export default Login;
