import { Grid, TextField, Button, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div className="login-section mt-5">
            <h2>Please Login Here</h2>
            <Grid container sx={{ mt: 5, mx: 50 }} spacing={2}>
                <Grid item xs={12} md={6}>
                    {user?.email && <Alert severity="success">Login Successfully</Alert>}
                    {authError && <Alert severity="warning">{authError}</Alert>}
                    <form onSubmit={handleLoginSubmit}>
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

                        <Button
                            variant="contained"
                            onClick={handleLoginSubmit}
                            color="success"
                            sx={{ mb: 3, width: '50%', m: 1 }}
                        >Login</Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;