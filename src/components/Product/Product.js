import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, img, name, description, price } = product;
    return (
        <div>
            <div className="explore pb-3 shadow p-3 mb-5  rounded">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p className="px-3">{description}</p>
                <p>Price: ${price}</p>
                <Link to={`/product/${ _id }`}>
                    <button className="btn btn-success ">Order Now</button>

                </Link>
            </div>
        </div>
    );
};

export default Product;