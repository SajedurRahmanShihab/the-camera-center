import { Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from '../../../images/banner-bg.jpg'

const Banner = () => {
    return (
        <Container>
            <div>
                <img style={{ width: '100%' }} src={banner} alt="banner background" />
                <NavLink to="/products">
                    <Box style={{ position: 'relative', float: 'right', marginTop: '-40px' }}>
                        <Button variant="contained">Explore More</Button>
                    </Box>
                </NavLink>
            </div>
        </Container>
    );
};

export default Banner;