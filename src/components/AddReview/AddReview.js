import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Dashboard from '../Dashboard/Dashboard';
import './AddReview.css';
const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://hidden-eyrie-67484.herokuapp.com/addReview', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review Added Successfully');
                    reset();
                }
                console.log(res)
            })
    };
    return (
        <div className="container">
            <Dashboard></Dashboard>
            <div className="add-review">
                <h2>Add Your Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("img")} placeholder="User Image Url" />
                    <input {...register("name", { required: true, maxLength: 50 })} placeholder="User Name" />
                    <textarea {...register("description")} placeholder="Review" />
                    <input className="submit" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;