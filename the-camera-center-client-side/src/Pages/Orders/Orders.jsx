import { Alert, Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const { user } = useAuth();
    const [data, setData] = useState({})
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const tempData = {
        email: user.email,
        name: user.displayName
    }


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const temp = { ...data };
        temp[field] = value;
        console.log("Value of temp", temp)
        if (!(temp.email)) {
            temp.email = tempData.email;
        }
        if (!(temp.name)) {
            temp.name = tempData.name;
        }
        setData(temp)
        if (submitSuccess) {
            e.target.value = '';
        }
        e.preventDefault()
    }

    const handleSubmit = e => {

        // send to the server
        console.log("Value of data: ", data)
        fetch('http://localhost:4000/orders', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSubmitSuccess(true)
                }
            })
        e.preventDefault()
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            {
                submitSuccess && <Alert severity="success">Order Placed Successfully</Alert>

            }
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    onBlur={handleOnBlur}
                    id="standard-basic"
                    label="Product Name"
                    name="productName"
                    variant="standard"
                    type="text"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    onBlur={handleOnBlur}
                    name="email"
                    id="standard-basic"
                    label="Email"
                    defaultValue={user.email}
                    variant="standard"
                    type="email"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    onBlur={handleOnBlur}
                    name="customerName"
                    id="standard-basic"
                    label="Customer Name"
                    defaultValue={user.displayName}
                    variant="standard"
                    type="text"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    onBlur={handleOnBlur}
                    id="standard-basic"
                    name="number"
                    label="Phone Number"
                    variant="standard"
                    type="text"
                />
                <Button sx={{ width: '90%', m: 1 }} type="submit" variant='contained'>Order</Button>
            </form>
        </div>
    );
};

export default Orders;