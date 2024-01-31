"use client";

import React from "react";
import { Box, Typography, Button, TextField } from "@/common";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";

const PriceFilter = () => {
  const [value, setValue] = React.useState([0, 500]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const valuetext = (value) => {
    return `${value}°C`;
  };

  return (
    <Box
      sx={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: 1,
        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          p: 3,
        }}
      >
        <Typography
          id="range-slider"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Price range
        </Typography>
        <Divider />
        <Slider
          sx={{
            mt: 4,
          }}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={1000}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Min"
            variant="outlined"
            sx={{
              mt: 2,
              width: "40%",
            }}
            value={value[0]}
            onChange={(e) => {
              setValue([e.target.value, value[1]]);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Max"
            variant="outlined"
            sx={{
              mt: 2,
              ml: 2,
              width: "40%",
            }}
            value={value[1]}
            onChange={(e) => {
              setValue([value[0], e.target.value]);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PriceFilter;
