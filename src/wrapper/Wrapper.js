"use client";

import Toaster from "@/common/Toaster";
import Footer from "@/component/Footer/Footer";
import MobileNavbar from "@/component/Navbar/MobileNavbar";
import Navbar from "@/component/Navbar/Navbar";
import theme from "@/theme";
import { ThemeProvider } from "@emotion/react";

const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <Navbar />
      {children}
      <Footer />

      <MobileNavbar />
    </ThemeProvider>
  );
};

export default Wrapper;
