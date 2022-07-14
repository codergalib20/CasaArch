import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <p>
                    <Link to="/privacy.policy"> Privacy Policy </Link> <span> || </span>
                    <Link to="/terms.conditions"> Term & Conditions </Link> || <Link to="/refund.return">Refund & Return</Link> -
                    All reserve by CasaArch</p>
            </div>
        </div>
    );
};

export default Footer;