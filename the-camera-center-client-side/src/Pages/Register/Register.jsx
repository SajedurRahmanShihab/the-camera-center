import React from 'react';
import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { registerUser, user, error } = useAuth();



    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
        e.preventDefault();
    }

    const handleRegistration = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password Mismatched')
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <Box>
                <Typography sx={{ m: 1, textAlign: 'center', width: '100%' }} variant="subtitle1" gutterBottom component="div">
                    Register
                </Typography>
                <form onSubmit={handleRegistration}>
                    <TextField
                        sx={{ width: '100%', m: 1 }}
                        id="standard-basic" label="Email"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" />
                    <br />
                    <TextField
                        sx={{ width: '100%', m: 1 }}
                        id="standard-basic2" label="Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '100%', m: 1 }}
                        id="standard-basic3" label="Retype Password"
                        type="password"
                        name="password2"
                        onChange={handleOnChange}
                        variant="standard" />
                    <Button type="submit" variant='contained' sx={{ width: '100%', m: 1 }}>Register</Button>
                    <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Already Registered? Please Login</Button></NavLink>
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </form>
            </Box>
        </Container>
    );
};

export default Register;