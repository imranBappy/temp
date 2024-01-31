"use client";
import React, { useContext, useEffect } from "react";
import { Box, Button } from "@/common";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { AddToCartContext } from "@/wrapper/Wrapper";
import { toast } from "react-hot-toast";

const AddToCart = ({ product }) => {
  const [cart, addToCart] = useContext(AddToCartContext);
  const handleAddToCart = () => {
    addToCart((preCart) => {
      const newState = [...preCart];
      const exist = newState.find((item) => item.id === product.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        newState.push({ ...product, quantity: 1 });
      }
      return newState;
    });
    toast.success("Successfully Added!");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        pt: 2,
      }}
    >
      <Button
        onClick={handleAddToCart}
        sx={{
          width: "100%",
          height: "40px",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <AddShoppingCartIcon />
        Add To Cart
      </Button>
    </Box>
  );
};

export default AddToCart;
