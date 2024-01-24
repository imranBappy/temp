import React from "react";
import { Container, Box, Typography } from "@/common";
import CategoryCard from "./CategoryCard";
import AppsIcon from "@mui/icons-material/Apps";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import AppleIcon from "@mui/icons-material/Apple";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
const Category = () => {
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
          Featured Category
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
          <CategoryCard title="Home Appliances" Icon={AppsIcon} />
          <CategoryCard title="Desktop" Icon={PersonalVideoIcon} />
          <CategoryCard title="Laptop" Icon={ScreenSearchDesktopIcon} />
          <CategoryCard title="Android Phone" Icon={PhoneAndroidIcon} />
          <CategoryCard title="Iphone" Icon={AppleIcon} />
          <CategoryCard title="Others" Icon={DevicesOtherIcon} />

          <CategoryCard title="Home Appliances" Icon={AppsIcon} />
          <CategoryCard title="Desktop" Icon={PersonalVideoIcon} />
          <CategoryCard title="Laptop" Icon={ScreenSearchDesktopIcon} />
          <CategoryCard title="Android Phone" Icon={PhoneAndroidIcon} />
          <CategoryCard title="Iphone" Icon={AppleIcon} />
          <CategoryCard title="Others" Icon={DevicesOtherIcon} />
          <CategoryCard title="Others" Icon={DevicesOtherIcon} />

        </Box>
      </Container>
    </Box>
  );
};

export default Category;
