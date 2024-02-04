"use client";

import { bangladeshDistricts } from "@/data/location";
// import { Autocomplete, TextField } from "@mui/material";
import { Autocomplete } from "@/common";
import { useState } from "react";

const DemoPage = () => {
  const [district, setDistrict] = useState("");
  return (
    <div
      style={{
        marginTop: 100,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={bangladeshDistricts}
        sx={{ width: 300 }}
        value={district}
        label="Districts"
        onChange={(event, newValue) => {
          setDistrict(newValue?.label || null);
        }}
        // renderInput={(params) => <TextField {...params} label="Districts" />}
      />
    </div>
  );
};

export default DemoPage;
