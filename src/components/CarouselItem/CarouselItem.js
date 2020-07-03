import React from 'react'
import PropTypes from 'prop-types';

import './index.css';

const CarouselItem = ({
    title,
    position,
    images,
    description,
    date
}) => {

    return (
        <div className={`carousel carousel-${position}`}>
            <div className='text'>
                <div className='title'>
                    <h1>{title}<span className='outline'>{title}</span></h1>
                </div>
                <div className='carousel-info'>
                    <p className='desc'>{description}</p>
                    <span className='date'>{date}</span>
                </div>
            </div>

            <div className='carousel-image'>
                <img src={images[0]} alt='Project' />
                <p>VIEW PROJECT</p>
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    title: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['top', 'center', 'bot']).isRequired,
    images: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default CarouselItem;