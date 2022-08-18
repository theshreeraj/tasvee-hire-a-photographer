import React from 'react';
import banner from '../../src/assets/banner.png';
import './hero.css';

const Hero = () => {
    return (
        <div className="tsv__header section__padding" id="home">
            <div className="tsv__header-content">
                <h1 className="gradient__text-logo">TASVEE!</h1>
                <h1 className="gradient__text">Hire the Perfect photographer for you</h1>
            </div>

            <div className="tsv__header-image">
                <img src={banner} alt="banner" />
            </div>
        </div>
    )
}

export default Hero