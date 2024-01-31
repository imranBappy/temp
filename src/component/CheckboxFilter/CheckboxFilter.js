import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@/common";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckboxFilter = ({ title, options, expanded = false }) => {
  return (
    <Box
      sx={{
        borderRadius: 1,
        bgcolor: "background.paper",
      }}
    >
      <Accordion
        defaultExpanded={expanded}
        sx={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            id="range-slider"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {options?.map((option, i) => (
            <FormControlLabel
              key={`key_ ${i}`}
              control={<Checkbox />}
              label={option}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CheckboxFilter;
