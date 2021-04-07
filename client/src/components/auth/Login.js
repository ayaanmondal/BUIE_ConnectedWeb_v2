import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom"
export const Login = () => {
    const [fromData, setFromData] = useState({
        name:'',
        email:''
    });

    const { email, password } = fromData;
    const onChange = e => setFromData({ ...fromData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('SUCCESS');
    };
  return (
    <Fragment>
      <h1 class="large text-primary">Sign In</h1>
      <p class="lead">
        <i class="fas fa-user"></i> Sign into Your Account
      </p>
      <form class="form" onSubmit={e => onSubmit(e)}>
        <div class="form-group">
          <input 
            type="email" 
            placeholder="Email Address" 
            name="email" 
            value = {email}
            onChange = {e => onChange(e)}
            required 
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value = {password}
            onChange = {e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
      <p class="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};
