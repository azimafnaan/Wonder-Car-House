import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import './Explores.css';
const Explores = () => {
    const [explores, setExplores] = useState([]);

    useEffect(() => {
        fetch('https://hidden-eyrie-67484.herokuapp.com/addProduct')
            .then(res => res.json())
            .then(data => setExplores(data))


    }, [])
    return (
        <div className="container">
            <div className="explores-container">
                <h2>Our Products</h2>
                <div className="explores-product">
                    {
                        explores.map(explore => <Explore
                            key={explore._id}
                            explore={explore}
                        ></Explore>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Explores;