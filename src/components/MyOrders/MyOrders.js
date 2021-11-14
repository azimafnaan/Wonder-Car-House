import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth()
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const url = `https://hidden-eyrie-67484.herokuapp.com/addOrder?email=${ user.email }`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    })
    return (
        <div className="container">
            <Dashboard></Dashboard>
            <h2>My All Orders</h2>
            <div className="order-container">
                {
                    order.map(order => <MyOrder
                        key={order._id}
                        order={order}
                    ></MyOrder>
                    )
                }
            </div>

        </div>
    );
};

export default MyOrders;