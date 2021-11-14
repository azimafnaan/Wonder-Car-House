import React, { useState } from 'react';
import { Grid, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password Did Not Match");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <div className="login-section mt-5">
            <h2>Please Register Here</h2>
            <Grid container sx={{ mt: 5, mx: 50 }} spacing={2}>

                <Grid item xs={12} md={6}>
                    {user?.email && <Alert severity="success">Register Successfully</Alert>}
                    {authError && <Alert severity="warning">{authError}</Alert>}

                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ mb: 3, width: '50%', m: 1 }}
                            label="Your Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            id="fullWidth"
                        />
                        <TextField
                            sx={{ mb: 3, width: '50%', m: 1 }}
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            id="fullWidth"
                        />
                        <TextField
                            sx={{ mb: 3, width: '50%', m: 1 }}
                            label="Password"
                            type="password"
                            onBlur={handleOnBlur}
                            name="password"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{ mb: 3, width: '50%', m: 1 }}
                            label="Re-Type Your Password"
                            type="password"
                            onBlur={handleOnBlur}
                            name="password2"
                            id="fullWidth"
                        />
                        <Button
                            variant="contained"
                            color="success"
                            onClick={handleLoginSubmit}
                            sx={{ mb: 3, width: '50%', m: 1 }}
                        >Register</Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Register? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                </Grid>
            </Grid>
        </div>
    );
};

export default Register;