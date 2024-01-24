import { Container, Box, Typography, Link, Button } from "@/common";
import CallIcon from "@mui/icons-material/Call";
import LocationCity from "@mui/icons-material/LocationCity";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      mt={10}
      sx={{
        width: "100%",
        backgroundColor: "background.dark",
        mx: 0,
        p: 0,
      }}
    >
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            backgroundColor: "background.dark",
          }}
        >
          <Box
            pt={10}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                gap: "20px",
              }}
            >
              <Typography variant="h6" color="white">
                SUPPORT
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "start",
                  gap: "10px",
                }}
              >
                <Button
                  variant="outlined"
                  // sx={{
                  //   padding: "10px 24px",
                  //   borderRadius: "100px",
                  // }}
                  sx={{
                    width: "100%",
                  }}
                >
                  <CallIcon sx={{ mr: 2 }} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      10:00 AM - 6:00 PM
                    </Typography>
                    <Typography variant="body2" color="white">
                      +91 1234567890
                    </Typography>
                  </Box>
                </Button>
                <Button
                  sx={{
                    width: "100%",
                  }}
                  variant="outlined"
                  // sx={{
                  //   padding: "10px 24px",
                  //   borderRadius: "100px",
                  // }}
                >
                  <LocationCity sx={{ mr: 2 }} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Store Locator
                    </Typography>
                    <Typography variant="body2" color="white">
                      Find Our Stores
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                gap: "20px",
              }}
            >
              <Typography variant="h6" color="white">
                ABOUT US
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "start",
                  gap: "10px",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  <Link href="https://www.w3kernel.com">About Us</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link href="https://www.w3kernel.com">Careers</Link>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <Link href="https://www.w3kernel.com">
                    Terms and Conditions
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link href="https://www.w3kernel.com">Privacy policy</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link href="https://www.w3kernel.com">Sitemap</Link>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                gap: "20px",
              }}
            >
              <Typography variant="h6" color="white">
                STAY CONNECTED
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "start",
                  gap: "10px",
                }}
              >
                <Typography variant="body2" color="white">
                  E-commerce
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square,
                  Dhaka 1000
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                    gap: "10px",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Email:
                  </Typography>
                  <Typography variant="body2" color="primary">
                    admin@w3kernel.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            mt={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              borderTop: "0.5px solid #e8e8e8",
            }}
          >
            <Typography variant="body2" color="text.secondary" align="center">
              {`© ${new Date().getFullYear()} 
               All rights reserved by `}
              <Link color="inherit" href="https://www.w3kernel.com">
                W3kernel.com
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
