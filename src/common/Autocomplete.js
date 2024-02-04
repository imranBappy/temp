import React from "react";
import Autocomp from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Autocomplete = ({
  options = [],
  id,
  label,
  error,
  helperText,
  ...rest
}) => {
  return (
    <Autocomp
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "primary.main",
          },
          "&:hover fieldset": {
            borderColor: "primary.main",
          },
          "&.Mui-focused fieldset": {
            borderColor: "primary.main",
          },
        },
        mb: 2,
      }}
      disablePortal
      id={id}
      options={options}
      {...rest}
      renderInput={(params) => (
        <TextField
          label={label}
          error={error}
          helperText={helperText}
          {...params}
        />
      )}
    />
  );
};

export default Autocomplete;
