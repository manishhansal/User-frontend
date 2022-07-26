import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../actions/user';

const AddUser = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        profilePic: ""
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
        dispatch(createUser(form)).then((res) => console.log(res));
        window.location.reload();
    }

    const { firstName, lastName, email, password, profilePic } = form;
  return (
      <>
          <form onSubmit={handleSubmit}>
              <input id="firstName" type="text" value={firstName} placeholder="Enter your first name"  onChange={handleChange}/>
              <br/>
              <input id="lastName" type="text" value={lastName} placeholder="Enter your last name"  onChange={handleChange}/>
              <br/>
              <input id="email" type="email" value={email}  placeholder="Enter your email"  onChange={handleChange}/>
              <br/>
              <input id="password" type="password" value={password} placeholder="Enter your password"  onChange={handleChange}/>
              <br/>
              <input id="profilePic" type="file" value={profilePic} onChange={handleChange}/>
              <br/>
              <input type="submit" value="Add User"/>
          </form>
    </>
  )
}

export default AddUser;