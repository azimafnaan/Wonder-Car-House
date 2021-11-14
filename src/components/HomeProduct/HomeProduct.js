import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const HomeProduct = () => {
    const [homeProduct, setHomeProduct] = useState([]);

    useEffect(() => {
        fetch('https://hidden-eyrie-67484.herokuapp.com/addProduct')
            .then(res => res.json())
            .then(data => setHomeProduct(data.slice(0, 6)))


    }, [])
    return (
        <div className="container">
            <div className="explores-container">
                <h2>Our Products</h2>
                <div className="explores-product">
                    {
                        homeProduct.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div >
    );
};

export default HomeProduct;