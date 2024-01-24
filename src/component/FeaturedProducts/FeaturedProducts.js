import React from 'react';
import { Box,Container, Typography, Button } from '@/common';
import ProductCard from '../ProductCard/ProductCard'


const FeaturedProducts = () => {
    return (
        <Box mt={7}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: "25px",
              lineHeight: "36px",
              textAlign: "center",
              color: "#000",
              marginBottom: "10px",
            }}
          >
         Featured Products

          </Typography>
  
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "center",
              color: "#000",
              marginBottom: "30px",
            }}
          >
            Browse the collection of our top categories
          </Typography>
  
          <Box
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            gap={3}
            flexWrap={"wrap"}
          >
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            </Box>

            <Box
            
                display="flex"
                justifyContent="center"
                my={4}
            >
            <Button
                title="Browse All Goods"
                variant='outlined'
            />
            </Box>
      </Container>
    </Box>
    );
};

export default FeaturedProducts;