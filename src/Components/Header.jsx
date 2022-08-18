import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo2.png';
import './header.css';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="tsv__navbar">
            <div className="tsv__navbar-links">
                <div className="tsv__navbar-links_logo">
                    <img src={logo} alt='logo' />
                </div>
            </div>
            <div className="tsv__navbar-sign">
                <button type="button">Log in</button>
            </div>
            <div className="tsv__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="tsv__navbar-menu_container scale-up-center">
                        {/* <div className="tsv__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt3">What is GPT3?</a></p>
                            <p><a href="#possibility">Open AI</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#blog">Library</a></p>
                        </div> */}
                        <div className="tsv__navbar-menu_container-links-sign">
                            <p>Create Account</p>
                            <button type="button">Log in</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;

