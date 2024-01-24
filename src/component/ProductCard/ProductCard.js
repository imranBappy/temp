import React from 'react';
import { Box, IconButton, Image, Typography } from '@/common';
import demoProduct from '../../assets/images/demoProduct.jpg'

const ProductCard = () => {
    return (
        <IconButton
            sx={{
                borderRadius:2,
                display:'flex',
                flexDirection:'column',
                gap:2,
                width:220,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
p:2
            }}
        >
            <Image
                src={demoProduct}
                alt='Hello'
                width={200}
                height={200}
                style={{
                    width:'200px',
                    height:'200px',
                }}
            />
            <Typography
                variant='h3'
                component={'h3'}
                sx={{
                    fontSize:14,
                    color:"black",
                    lineHeight:1.3,
                    textAlign:'left'
                }}
                >

            Lenovo IdeaPad 3 15ALC6 Ryzen 7 5700U 15.6 FHD Laptop With WiFi 6
            </Typography>
            <Typography
           
                sx={{
                    width:'100%',
                    fontSize:15,
                    color:"primary.main",
                    lineHeight:1.3,
                    textAlign:'left',
                    fontWeight:'bolder',
                }}
                >
500$
            </Typography>
        </IconButton>
        )
    }
export default ProductCard;