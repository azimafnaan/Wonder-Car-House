import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './MyOrder.css';
const MyOrder = ({ order }) => {
    const { productName } = order;
    const handleDelete = id => {
        const url = `https://hidden-eyrie-67484.herokuapp.com/addOrder/${ id }`;
        fetch(url, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Order Item');

                }
            })
    }
    return (
        <div>
            <Card border="primary" style={{ width: '22rem', height: '10rem' }}>
                <Card.Header>Order Item Name : {productName}</Card.Header>
                <Card.Body>
                    <Button onClick={() => handleDelete(order._id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyOrder;