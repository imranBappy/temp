"use client";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { toast } from "react-hot-toast";

import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "@/common";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InventoryIcon from "@mui/icons-material/Inventory";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";

const buyerMenu = [
  {
    name: "My Orders",
    icon: <LocalMallIcon />,
    link: "/dashboard/orders",
  },
];
const sellerMenu = [
  {
    name: "Received Orders",
    icon: <InventoryIcon />,
    link: "/dashboard/received-orders",
  },
  {
    name: "My Ads",
    icon: <AdsClickIcon />,
    link: "/dashboard/ads",
  },
];

const generalMenu = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    name: "My Profile",
    icon: <AccountCircleIcon />,
    link: "/dashboard/profile",
  },
];

const settingsMenu = [
  {
    name: "Logout",
    icon: <DashboardIcon />,
    link: "#",
  },
];

const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DashboardDrawer = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {generalMenu.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.link} style={{ width: "100%" }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {buyerMenu.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.link} style={{ width: "100%" }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {sellerMenu.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.link} style={{ width: "100%" }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DashboardDrawer;
