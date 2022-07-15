import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Header from "../../Header/Header";
const SignUp = () => {
  return (
    <div>
      <Header />
      <div className="signup_wrapper">
        <div className="signup_card">
          <div className="card_header">
            <h1 className="card_title">Create your account</h1>
            <p>Sign up to get started!</p>
          </div>
          <div className="card_body">
            <div className="input_group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />
            </div>
            <div className="input_group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />
            </div>
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
            <div className="input_group_agree">
              <input type="checkbox" name="" id="agree_me" />
              <label htmlFor="agree_me">
                I agree with the <Link to="/terms.conditions">Terms of services </Link> and{" "}
                <Link to="/privacy.policy">Priavacy Policy</Link>
              </label>
            </div>
            <div className="input_group">
              <button>Register now</button>
              <div className="not_member">
                Not a member? <a href="/"> Signup Now</a>
              </div>
            </div>
          </div>
          <div className="register_with_social">
            <div className="or">or</div>
            <div className="left">
              <button className="facebook">
                <span>
                  <FaFacebookF />
                </span>{" "}
                Login via Facebook
              </button>
            </div>
            <div className="right">
              <button className="google">
                <span>
                  <AiOutlineGoogle />
                </span>{" "}
                Login via Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
