"use client";

import Toaster from "@/common/Toaster";
import Footer from "@/component/Footer/Footer";
import MobileNavbar from "@/component/Navbar/MobileNavbar";
import Navbar from "@/component/Navbar/Navbar";
import theme from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { createContext, useState } from "react";

export const AddToCartContext = createContext();
const Wrapper = ({ children, ...rest }) => {
  const [cart, setCart] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <AddToCartContext.Provider value={[cart, setCart]}>
        <Toaster />
        <Navbar />
        {children}

        <MobileNavbar />
      </AddToCartContext.Provider>
    </ThemeProvider>
  );
};

export default Wrapper;
