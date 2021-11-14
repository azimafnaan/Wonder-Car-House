import React from 'react';
import './Review.css';
const Review = ({ review }) => {
    const { id, name, img, description } = review;
    return (
        <div>
            <div className="reviewPage pb-3 shadow p-3 mb-5  rounded">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p className="px-3">{description}</p>
            </div>
        </div>
    );
};

export default Review;