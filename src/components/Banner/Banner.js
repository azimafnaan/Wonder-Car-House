import React from 'react';
import image from '../../Images/banner.jpg'
const Banner = () => {
    return (
        <div>
            <img src={image} className="w-100" alt="" />
        </div>
    );
};

export default Banner;