import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Dashboard from '../Dashboard/Dashboard';
import './AddProduct.css';
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://hidden-eyrie-67484.herokuapp.com/addProduct', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }

            })
    };
    return (
        <div className="container">
            <Dashboard></Dashboard>
            <div className="add-product">
                <h2>Add Your Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 50 })} placeholder="Product Name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="Image Url" />
                    <input className="submit" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;