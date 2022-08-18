// import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import Card from './Card';
import './services.css'
import contents from './contenstsApi'
import { Link } from 'react-router-dom';



const Services = () => {
    console.log(contents)
    return (
        <>
            <div className="tsv_category section_padding" id="blog">
                <div className="tsv__category-container_groupB">
                    {
                        contents.map((ele) => {
                            const { Category, images, link } = ele;
                            return (
                                <>
                                    <Link to={link}>
                                        <Card imgUrl={images} text={Category} />

                                    </Link>
                                </>
                            )
                        })
                    }


                </div>


            </div>
        </>
    )
}

export default Services;