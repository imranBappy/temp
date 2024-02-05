"use client";
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
import { useRouter, usePathname } from "next/navigation";
import { ViewDaySharp } from "@mui/icons-material";
import { DashboardModeContext } from "@/wrapper/Wrapper";
import { useContext } from "react";

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
    name: "Post Ads",
    icon: <AdsClickIcon />,
    link: "/dashboard/post-ads",
  },
  {
    name: "My Ads",
    icon: <ViewDaySharp />,
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
  const pathname = usePathname();
  const [dashboardMode] = useContext(DashboardModeContext);

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
        {generalMenu.map((item, index) => {
          return (
            <ListItem
              key={index}
              disablePadding
              style={{
                backgroundColor:
                  pathname === item.link
                    ? "rgba(0, 0, 0, 0.09)"
                    : "transparent",
              }}
            >
              <Link href={item.link} style={{ width: "100%" }}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
      {dashboardMode === "buyer" && (
        <>
          <Divider />
          <List>
            {buyerMenu.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                style={{
                  backgroundColor:
                    pathname === item.link
                      ? "rgba(0, 0, 0, 0.09)"
                      : "transparent",
                }}
              >
                <Link href={item.link} style={{ width: "100%" }}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </>
      )}
      {dashboardMode === "seller" && (
        <>
          <Divider />
          <List>
            {sellerMenu.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                style={{
                  backgroundColor:
                    pathname === item.link
                      ? "rgba(0, 0, 0, 0.09)"
                      : "transparent",
                }}
              >
                <Link href={item.link} style={{ width: "100%" }}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </>
      )}
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
