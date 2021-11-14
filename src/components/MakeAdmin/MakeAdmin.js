import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://hidden-eyrie-67484.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div className="container">
            <Dashboard></Dashboard>
            <h2>Make an Admin</h2>
            <div>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ mb: 3, width: '40%', m: 1 }}
                        label="Your Email"
                        type="email"
                        onBlur={handleOnBlur}
                        id="fullWidth" />
                    <br />
                    <Button type="submit" variant="contained">Make Admin</Button>
                </form>
                {success && <Alert severity="success">Make Admin Successfully</Alert>}
            </div>
        </div>
    );
};

export default MakeAdmin;