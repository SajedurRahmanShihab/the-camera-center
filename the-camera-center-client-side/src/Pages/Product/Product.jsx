import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Product = (props) => {
    const { name, description, img, price } = props.product;
    return (
        <Grid item xs={12} sm={12} md={4} >
            <Card sx={{ minWidth: 275, border: 0, p: '10px' }}>
                <CardMedia
                    component="img"
                    height="140"
                    style={{ width: '80%', height: '250px', margin: '0 auto' }}
                    image={img}
                    alt="camera"
                />
                <CardContent>
                    <Box>
                        <Typography variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                            {description}
                        </Typography>
                        <Typography variant="caption" component="div">
                            Price: {price} Taka
                        </Typography>
                    </Box>
                </CardContent>
                <Button variant='contained'>Buy Now</Button>
            </Card>
        </Grid>
    );
};

export default Product;