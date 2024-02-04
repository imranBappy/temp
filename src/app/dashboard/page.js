import React from "react";
import { Box, Container, Typography } from "@/common";

const DashboardPage = () => {
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
          <Box>
            <Typography variant="h6" color="text.primary" sx={{ mt: 4 }}>
              Buyer Info
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
                  Panding
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
                  Complate
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
        </Box>
      </Container>
    </Box>
  );
};

export default DashboardPage;
