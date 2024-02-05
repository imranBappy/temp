"use client";

import React, { useState } from "react";
import { Box, Typography, Autocomplete } from "@/common";
import Divider from "@mui/material/Divider";
import { bangladeshDistricts } from "@/data/location";
import getUpazilas from "@/utils/getUpazilas";

const LocationFilter = () => {
  const [district, setDistrict] = useState(null);
  const [city, setCity] = useState(null);

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
          Location
        </Typography>
        <Divider />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 3,
          }}
        >
          <Autocomplete
            sx={{ width: "100%" }}
            id="district"
            name="district"
            label={"District"}
            options={bangladeshDistricts}
            onChange={(_, newValue) => setDistrict(newValue?.label || null)}
            value={district}
          />
          <Autocomplete
            sx={{ width: "100%" }}
            id="city"
            name="city"
            label={"City"}
            options={getUpazilas(district) || []}
            onChange={(_, newValue) => setCity(newValue?.label || null)}
            disabled={!district}
            value={city}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LocationFilter;
