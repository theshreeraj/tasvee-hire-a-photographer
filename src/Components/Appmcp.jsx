import React from 'react';
import appmcp from '../assets/appmockup.png';
import './appmcp.css';

const Appmcp = () => {
    return (
        <div className="tsv__feature section__padding" id="home">
            <div className="tsv__feature-image">
                <img src={appmcp} alt='App Mockup' />
            </div>
            <div className="tsv__feature-content">
                <h1 className="gradient__text">We are soon launching our App</h1>
                <p>Enter your mail to let us know you are excited</p>

                <div className="tsv__feature-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Excited</button>
                </div>
            </div>

        </div>
    )
}

export default Appmcp