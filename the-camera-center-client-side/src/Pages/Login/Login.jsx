import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { loginUser } = useAuth();
    const [loginData, setLoginData] = useState({})

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
        e.preventDefault();
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <Box>
                <Typography sx={{ m: 1, textAlign: 'center', width: '100%' }} variant="subtitle1" gutterBottom component="div">
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
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
                    <Button type="submit" variant='contained' sx={{ width: '100%', m: 1 }}>Login</Button>

                    <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New User? Please Register</Button></NavLink>
                </form>
            </Box>
        </Container>
    );
};

export default Login;