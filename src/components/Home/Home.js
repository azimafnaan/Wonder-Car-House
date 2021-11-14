import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomeProduct from '../HomeProduct/HomeProduct';
import Marketing from '../Marketing/Marketing';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <HomeProduct></HomeProduct>
                <Marketing></Marketing>
                <Reviews></Reviews>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;