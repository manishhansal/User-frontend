import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from '../actions/user';

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({
            ...form,
            [id]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(form)).then((res) => console.log(res));
    }



    const { email, password } = form;
  return (
      <>
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
              <input id="email" type="email" placeholder="Enter your email" value={email} onChange={handleChange} />
              <br/>
              <input id="password" type="password" placeholder="Enter your password" value={password} onChange={handleChange}/>
              <br/>
              <input type="submit" value="LOGIN"/>
          </form>
    </>
  )
}

export default Login