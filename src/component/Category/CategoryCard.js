import React from "react";
import { IconButton, Typography, Link } from "@/common";

const CategoryCard = ({ title = "", Icon }) => {
  return (
    <Link
      href="/computer-laptop"
      sx={{
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <IconButton
        sx={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          width: "180px",
          height: "130px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "0",
        }}
      >
        <Icon
          sx={{
            color: "#000",
            fontSize: "30px",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            color: "#000",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </IconButton>
    </Link>
  );
};

export default CategoryCard;
