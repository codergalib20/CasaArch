import React from 'react';
import "./Header.css";
import logo from '../assets/logo-perfect.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header_wrapper">
                    <div className='logo'>
                        <img src={logo} alt="" />
                        <span>Casa Arch</span>
                    </div>
                    <div className='menu_buttons'>
                        <div className='menus'>
                            <Link to="/">Services</Link>
                            <Link to="/">Blog</Link>
                            <Link to="/about.us">About us</Link>
                            <Link to="/">Contact Us</Link>
                            <Link to="/posts">Posts</Link>
                        </div>
                        <div className='buttons'>
                            <Link to="/login">
                                <button className='login'>Login</button>
                            </Link>
                            <button className='professional'>Join as a professional</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;