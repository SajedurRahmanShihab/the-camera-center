import React from 'react';
import camera1 from '../../images/camera-1-min.jpeg'
import camera2 from '../../images/camera-2-min.jpeg'
import camera3 from '../../images/camera-3-min.jpeg'
import camera4 from '../../images/camera-4-min.jpeg'
import camera5 from '../../images/camera-5-min.jpeg'
import camera6 from '../../images/camera-6-min.jpeg'
import camera7 from '../../images/camera-7-min.jpeg'
import camera8 from '../../images/camera-8-min.jpeg'
import camera9 from '../../images/camera-9-min.jpeg'
import camera10 from '../../images/camera-10-min.jpeg'
import { Grid } from '@mui/material';
import Product from '../Product/Product';
import { Box, Container } from '@mui/system';

// Fake Data
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
    },
    {
        name: "Sony A6500",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit officia quia consequatur est, minus accusamus. Omnis minima officia ',
        img: camera7,
        price: '200000 '
    },
    {
        name: "Canon 90D",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit officia quia consequatur est, minus accusamus. Omnis minima officia ',
        img: camera8,
        price: '200000 '
    },
    {
        name: "Canon 80D",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit officia quia consequatur est, minus accusamus. Omnis minima officia ',
        img: camera9,
        price: '200000 '
    },
    {
        name: "Canon R7",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit officia quia consequatur est, minus accusamus. Omnis minima officia ',
        img: camera10,
        price: '200000 '
    }




]

const Products = () => {
    return (
        <Container>
            <Box>
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '25px 0px' }}>Explore All Our Products</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map((product, key) => <Product
                                key={key}
                                product={product}
                            >
                            </Product>)
                        }
                    </Grid>
                </div>
            </Box>
        </Container>
    );
};

export default Products;