"use client";

import React, { useContext, useState } from "react";
import { Box, Container, Typography } from "@/common";
import BuyerDashboard from "@/component/Dashboard/BuyerDashboard";
import SellerDashboard from "@/component/Dashboard/SellerDashboard";
import { DashboardModeContext } from "@/wrapper/Wrapper";

const DashboardPage = () => {
  const [dashboardMode, setDashboardMode] = useContext(DashboardModeContext);
  return (
    <Box style={{ marginTop: "64px" }}>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h3" color="primary">
            Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Welcome to the dashboard
          </Typography>
          {dashboardMode === "buyer" ? <BuyerDashboard /> : <SellerDashboard />}
        </Box>
      </Container>
    </Box>
  );
};

export default DashboardPage;
