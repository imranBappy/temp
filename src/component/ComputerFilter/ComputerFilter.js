"use client";
import React, { useState } from "react";
import { Box, Grid } from "@/common";
import PriceFilter from "../PriceFilter/PriceFilter";
import FilterBar from "../FilterBar/FilterBar";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import ProductCard from "../ProductCard/ProductCard";
import Drawer from "@mui/material/Drawer";
import LocationFilter from "../LocationFilter/LocationFilter";

const ComputerFilter = () => {
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const handleFilterDrawerOpen = () => {
    setShowFilterDrawer(true);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={3} lg={3} xl={3}>
          <Box
            display={{
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
            flexDirection={"column"}
            gap={2}
            mb={3}
          >
            <PriceFilter />
            <LocationFilter />

            <CheckboxFilter
              expanded={true}
              title={"Type"}
              options={["Used", "New", "Refurbished", "Open Box", "For Parts"]}
            />
            <CheckboxFilter
              title={"Brand"}
              options={["Apple", "Dell", "HP", "Lenovo"]}
            />

            <CheckboxFilter
              title={"RAM"}
              options={["4GB", "8GB", "16GB", "32GB"]}
            />
            <CheckboxFilter title={"CPU"} options={["Intel", "AMD", "Ryzen"]} />
            <CheckboxFilter
              title={"GPU"}
              options={["Nvidia", "AMD", "Intel"]}
            />
            <CheckboxFilter
              title={"Storage"}
              options={["SSD", "HDD", "NVMe"]}
            />
            <CheckboxFilter
              title={"Screen"}
              options={["13 inch", "15 inch", "17 inch"]}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <FilterBar handleFilterDrawerOpen={handleFilterDrawerOpen} />
          <Box
            display="flex"
            alignItems="center"
            gap={3}
            flexWrap={"wrap"}
            my={2}
            justifyContent={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
            }}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Box>
        </Grid>
      </Grid>

      <Drawer
        open={showFilterDrawer}
        onClose={() => setShowFilterDrawer(false)}
        anchor="right"
      >
        <Box
          display="flex"
          flexDirection="column"
          width={300}
          p={2}
          sx={{ height: "100%" }}
          gap={2}
          pb={5}
          mb={3}
        >
          <PriceFilter />
          <LocationFilter />

          <CheckboxFilter
            expanded={true}
            title={"Type"}
            options={["Used", "New", "Refurbished", "Open Box", "For Parts"]}
          />
          <CheckboxFilter
            expanded={true}
            title={"Brand"}
            options={["Apple", "Dell", "HP", "Lenovo"]}
          />

          <CheckboxFilter
            title={"RAM"}
            options={["4GB", "8GB", "16GB", "32GB"]}
          />
          <CheckboxFilter title={"CPU"} options={["Intel", "AMD", "Ryzen"]} />
          <CheckboxFilter title={"GPU"} options={["Nvidia", "AMD", "Intel"]} />
          <CheckboxFilter title={"Storage"} options={["SSD", "HDD", "NVMe"]} />
          <CheckboxFilter
            title={"Screen"}
            options={["13 inch", "15 inch", "17 inch"]}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default ComputerFilter;
