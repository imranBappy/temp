"use client";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Link, Box, Typography, IconButton } from "@/common";

import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { DashboardModeContext } from "@/wrapper/Wrapper";
const drawerWidth = 240;
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DashboardNavbar = ({ open, handleDrawerOpen }) => {
  const [dashboardMode, setDashboardMode] = useContext(DashboardModeContext);

  const handleDashboardMode = () => {
    if (dashboardMode === "buyer") {
      setDashboardMode("seller");
      localStorage.setItem("dashboardMode", "seller");
    } else {
      setDashboardMode("buyer");
      localStorage.setItem("dashboardMode", "buyer");
    }
  };
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              color: "white",
              padding: "5px",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "#5a00b4",
                color: "white",
                borderRadius: "5px",
              },
            }}
          >
            <Typography>Buyer</Typography>
            <AntSwitch
              checked={dashboardMode === "seller"}
              defaultChecked={dashboardMode === "seller"}
              onChange={handleDashboardMode}
              name="checkedC"
            />
            <Typography>Seller</Typography>
          </Stack>
          <Link href="/">
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "white",
                  color: "black",
                },
              }}
              size="small"
            >
              Visit
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
