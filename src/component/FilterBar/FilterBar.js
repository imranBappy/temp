import React from "react";
import { Box, IconButton, Typography } from "@/common";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import MenuIcon from "@mui/icons-material/Menu";

const FilterBar = ({ handleFilterDrawerOpen }) => {
  return (
    <Box
      sx={{
        borderRadius: 1,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        bgcolor: "background.paper",
        px: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "text.secondary",
          }}
          variant="body1"
          display={{
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          }}
        >
          Destop Computers
        </Typography>

        <IconButton
          onClick={handleFilterDrawerOpen}
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
              alignItems: "center",
            },
          }}
        >
          <MenuIcon
            sx={{
              color: "text.secondary",
            }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "text.secondary",
            }}
            variant="body1"
          >
            Show
          </Typography>
          <Select
            sx={{
              minWidth: 100,
              height: 40,
            }}
            defaultValue={20}
          >
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={40}>40</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "text.secondary",
            }}
            variant="body1"
          >
            Sort By :
          </Typography>
          <Select
            defaultValue={10}
            sx={{
              minWidth: 120,
              height: 40,
            }}
          >
            <MenuItem value={10}>Sort By Price</MenuItem>
            <MenuItem value={20}>Sort By Date</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterBar;
