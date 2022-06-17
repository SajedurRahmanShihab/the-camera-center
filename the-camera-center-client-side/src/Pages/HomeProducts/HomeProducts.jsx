import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import camera1 from '../../images/camera-1-min.jpeg';
import camera2 from '../../images/camera-2-min.jpeg';
import camera3 from '../../images/camera-3-min.jpeg';
import camera4 from '../../images/camera-4-min.jpeg';
import camera5 from '../../images/camera-5-min.jpeg';
import camera6 from '../../images/camera-6-min.jpeg';
import HomeProduct from '../HomeProduct/HomeProduct';


const products = [
    {
        name: "Canon R7",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit officia quia consequatur est, minus accusamus. Omnis minima officia ',
        img: camera1,
        price: '200000 '
    },
    {
        name: "Sony ZVe 10",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit officia quia consequatur est, minus accusamus. Omnis minima officia ',
        img: camera2,
        price: '200000 '
    },
    {
        name: "Canon R6",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit officia quia consequatur est, minus accusamus. Omnis minima officia ',
        img: camera3,
        price: '200000 '
    },
    {
        name: "Canon A6400",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit officia quia consequatur est, minus accusamus. Omnis minima officia ',
        img: camera4,
        price: '200000 '
    },
    {
        name: "Sony Alpha",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit officia quia consequatur est, minus accusamus. Omnis minima officia ',
        img: camera5,
        price: '200000 '
    },
    {
        name: "Sony ZV-1",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit officia quia consequatur est, minus accusamus. Omnis minima officia ',
        img: camera6,
        price: '200000 '
    }

]


const HomeProducts = () => {
    return (
        <Container>
            <Box>
                <h2 style={{ marginTop: '35px', marginBottom: '4px' }}>Our Products</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(product => <HomeProduct
                                key={product.name}
                                product={product}
                            >
                            </HomeProduct>)
                        }
                    </Grid>
                </div>
            </Box>
        </Container>
    );
};

export default HomeProducts;