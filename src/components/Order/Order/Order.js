import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Order.css'
const Order = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://hidden-eyrie-67484.herokuapp.com/addOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Order Successfully Complete');
                    reset();
                }

            })

    }

    useEffect(() => {
        fetch(`https://hidden-eyrie-67484.herokuapp.com/addProduct/${ productId }`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <div className="container order">
                <div>
                    <img
                        className="d-block w-100"
                        src={product.img}
                        alt=""
                    />
                </div>
                <div className="order-form">
                    <h3>Order Now</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name", { maxLength: 50 })} placeholder="User Name" />
                        <input defaultValue={user.email} type="email" {...register("email", { maxLength: 50 })} placeholder="Email" />
                        <input {...register("productName", { required: true, maxLength: 50 })} placeholder="Product Name" />
                        <input {...register("phoneNumber", { required: true, maxLength: 50 })} placeholder="Phone Number" />
                        <input type="number" {...register("price")} placeholder="Price" />
                        <input className="submit" type="Submit" />
                    </form>
                </div>

            </div>
            <div className="container ">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p> Price: ${product.price}</p>
                <h5>Why You Purchase Our Product</h5>
                <p>  Okay, let’s switch gears because the niche I want to talk about today is the car niche. Before we get started, let me address a doubt that I know is going through your head right now. It’s 2019, and the world is moving towards a greener future. One with fewer cars on the road and therefore fewer car accessories on the road too. That’s what I thought as well. But one of the most important rules about being a successful entrepreneur is to never make assumptions. You’ve got to follow the data and not your gut. So let’s look at some data that backs up my claim that the car accessories niche has a high potential. I’m going to talk about US data here since the US is such a huge ecommerce market for dropshippers.</p>
                <p>The average American now spends over 50 minutes a day driving, which has been increasing over the last few years. The amount of drivers has increased as well because, over the last five years, four million new drivers were added to the road. That means that there are now more than 225 million drivers on the road in the United States, more Americans on the road all spending more time in their cars means more driving-related frustrations. </p>

            </div>
        </div>
    );
};

export default Order;