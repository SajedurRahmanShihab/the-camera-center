import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const fontStyles = {
    fontFamily: 'Sora'
}


const Navigation = () => {
    return (
        <Box>
            <AppBar style={{ background: '#000' }} position="static">
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Box>
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography style={fontStyles} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Camera Center
                            </Typography>
                        </NavLink>
                    </Box>
                    <Box>
                        <NavLink to="/products">
                            <Button style={{ textDecoration: 'none', color: 'white' }} >Products</Button>
                        </NavLink>
                        <NavLink to="/blogs">
                            <Button style={{ textDecoration: 'none', color: 'white' }} >Blogs</Button>
                        </NavLink>
                        <NavLink to="/reviews">
                            <Button style={{ textDecoration: 'none', color: 'white' }} >Reviews</Button>
                        </NavLink>
                        <NavLink to="/login">
                            <Button style={{ textDecoration: 'none', color: 'white' }} >Login</Button>
                        </NavLink>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;