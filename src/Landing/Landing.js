import React from 'react';
import { FiSearch } from 'react-icons/fi';
import landingImage from '../assets/rectangle1.png';
import Header from '../Header/Header';
import './Landing.css';

const Landing = () => {
    return (
        <div className='landing'>
            <Header />
            <div className="container">
                <div className="landing_wrapper">
                    <div>
                        <h2>We Help You To <br />
                            Make The Perfect CASA</h2>
                        <p>Interior design is an art and science of enhancing the interior of the building to acheive a healthier and more aesthetically</p>
                        <span>What Services are you Looking for?</span>
                        <div className="search_box">
                            <span><FiSearch /></span>
                            <input type="search" name="" id="" placeholder='Remodelling,Interior,Landscaping ...' />
                            <button>Search</button>
                        </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <img src={landingImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;