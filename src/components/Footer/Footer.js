import React from 'react';
import { Link } from 'react-router-dom';


import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-container container">
                <div className="mt-4">
                    <h4>About Us</h4>
                    <p>Wonder Car vehicles are produced at its factory in Fremont To achieve our goal of having the safest factories in the world.</p>
                </div>
                <div className="mt-4">
                    <h4>Our Community</h4>
                    <Link to='/'> Community</Link>
                    <br />
                    <Link to='/'> Blog</Link>
                    <br />
                    <Link to='/'> Forums</Link>
                </div>
                <div className="mt-4">
                    <h4>Wonder Car House</h4>
                    <Link to='/'>About Wonder Car House</Link>
                    <br />
                    <Link to='/'>Careers</Link>
                    <br />
                    <Link to='/'>Privacy Policy</Link>
                </div>
                <div className="footer-form mt-4">
                    <h4>Subscribe</h4>
                    <input type="text" placeholder="Your Email" />
                    <input type="submit" className="form" value="Submit" />
                </div>
            </div>
        </div>
    );
};

export default Footer;