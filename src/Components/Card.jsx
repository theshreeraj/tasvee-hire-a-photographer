import React from 'react';
import './card.css';

const Card = ({ imgUrl, text }) => (
    <div className="tsv__blog-container_article">
        <div className="tsv__blog-container_article-image">
            <img src={imgUrl} alt="categoryimg" />
        </div>
        <div className="tsv__blog-container_article-content">
            <div>
                <h3>{text}</h3>
            </div>
        </div>
    </div>
);

export default Card;

