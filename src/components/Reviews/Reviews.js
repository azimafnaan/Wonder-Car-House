import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';


const Reviews = () => {
    const [reviews, SetReviews] = useState([]);

    useEffect(() => {
        fetch('https://hidden-eyrie-67484.herokuapp.com/addReview')
            .then(res => res.json())
            .then(data => SetReviews(data))
    })
    return (
        <div className="reviews-container">
            <h2>Our Happy Customer</h2>
            <div className="reviews">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;