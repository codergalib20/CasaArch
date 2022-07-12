import React, { useState } from 'react';
import "./Header.css";
import logo from '../assets/logo-perfect.png';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
const Header = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <div className='header'>
            <div className="container">
                <div className="header_wrapper big_display">
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
                <div className={`responsive_open_menu`}>
                    <span onClick={() => setOpenSidebar(!openSidebar)}><BiMenuAltRight /></span>
                </div>
                <div className={`responsive_open_sidebar  ${openSidebar ? "opened" : "closed"}`}>
                    <span onClick={() => setOpenSidebar(!openSidebar)} className='responsive_close_sidebar'><GrClose /></span>
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