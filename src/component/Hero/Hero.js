import React from "react";
import { Container, Grid, Box, Image } from "@/common";
import Slider from "./Slider";
import OffterBanner from "../../assets/images/OfferBanner.webp";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={9} sm={12} xs={12}>
            <Slider />
          </Grid>
          <Grid item md={3} sm={12}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <Image
                src={OffterBanner}
                alt="hero"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
