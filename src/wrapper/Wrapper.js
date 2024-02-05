"use client";

import Toaster from "@/common/Toaster";
import MobileNavbar from "@/component/Navbar/MobileNavbar";
import Navbar from "@/component/Navbar/Navbar";
import theme from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { createContext, useEffect, useState } from "react";

export const AddToCartContext = createContext();
export const DashboardModeContext = createContext();

const Wrapper = ({ children, ...rest }) => {
  const [cart, setCart] = useState([]);
  const [dashboardMode, setDashboardMode] = useState("buyer");

  useEffect(() => {
    const dashboardModeData = localStorage.getItem("dashboardMode");
    if (dashboardModeData) {
      setDashboardMode(dashboardModeData);
    } else {
      localStorage.setItem("dashboardMode", "buyer");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DashboardModeContext.Provider value={[dashboardMode, setDashboardMode]}>
        <AddToCartContext.Provider value={[cart, setCart]}>
          <Toaster />
          <Navbar />
          {children}
          <MobileNavbar />
        </AddToCartContext.Provider>
      </DashboardModeContext.Provider>
    </ThemeProvider>
  );
};

export default Wrapper;
