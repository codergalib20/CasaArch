import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <Header />`
      <div className="login_wrapper">
        <div className="login_card">
          <div className="card_header">
            <h1 className="card_title">Login</h1>
            <p>Welcome back please enter you details!</p>
          </div>
          <div className="card_body">
            <div className="input_group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="input_group">
              <div className="forgot_box">
                <label htmlFor="password">Password</label>
                <a href="/">Forgot Password?</a>
              </div>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="input_group_remember">
              <input type="checkbox" name="" id="remember_me" />
              <label htmlFor="remember_me">Remember me</label>
            </div>
            <div className="input_group">
              <button>Login now</button>

              <div className="not_member">
                Not a member? <Link to="/signup"> Signup Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
