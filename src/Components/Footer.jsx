import React from 'react';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className="tsv__footer section__padding">

            <div className="tsv__footer-links">
                <div className="tsv__footer-links_logo">
                    <img src={logo} alt="tasvee_logo" />
                    <p>By Saphite Technologies Pvt. Ltd, <br /> All Rights Reserved</p>
                </div>
                <div className="tsv__footer-links_div">
                    <h4>Links</h4>
                    <p>Social Media</p>
                    <Link to="/aboutus"><p>About Us</p></Link>
                    <p>Join Us</p>
                </div>
                <div className="tsv__footer-links_div">
                    <h4>Company</h4>
                    <Link to="/terms"><p>Terms & Conditions </p></Link>
                    <Link to="/privacy"><p>Privacy Policy</p></Link>
                    <a href='https://tasveecommunity.in/' target="_blank" rel="noreferrer"><p>Tasvee for photographers</p></a>
                </div>
                <div className="tsv__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>+91 9702796695</p>
                    <p>officialtasvee@gmail.com</p>
                </div>
            </div>

            <div className="tsv__footer-copyright">
                <p>@2022 Tasvee. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;