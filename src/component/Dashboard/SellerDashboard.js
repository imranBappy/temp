import React from 'react';
import { Box, Typography } from "@/common";

const SellerDashboard = () => {
    return (
      <Box mt={5}>
        <Typography variant="h6" color="text.primary" sx={{ mt: 4 }}>
          Seller Info
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mt: 2,
            gap: 4,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              backgroundColor: "secondary.main",
              color: "white",
              p: 3,
              borderRadius: 2,
              gap: 2,
            }}
          >
            <Typography variant="h6" color="text.primary">
              Orders
            </Typography>
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              100
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              backgroundColor: "info.main",
              color: "white",
              p: 3,
              borderRadius: 2,
              gap: 2,
            }}
          >
            <Typography variant="h6" color="text.primary">
              Customer
            </Typography>
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              500
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              backgroundColor: "success.main",
              color: "white",
              p: 3,
              borderRadius: 2,
              gap: 2,
            }}
          >
            <Typography variant="h6" color="text.primary">
              Bug Report
            </Typography>
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              5
            </Typography>
          </Box>
        </Box>
      </Box>
    );
};

export default SellerDashboard;