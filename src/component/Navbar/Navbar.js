import { useContext, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AddShoppingCart,
} from "@mui/icons-material";
import { Container, Box, Link, Button, Typography } from "@/common";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { AddToCartContext } from "@/wrapper/Wrapper";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart] = useContext(AddToCartContext);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isLoggedIn ? (
        <Box>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Box>
      ) : (
        <Box>
          <Link href={"/login"}>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
          </Link>
          <Link href={"/register"}>
            <MenuItem onClick={handleMenuClose}>Register</MenuItem>
          </Link>
        </Box>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Link href={"/"}>
              <IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block", color: "white" } }}
                >
                  E-Commerce
                </Typography>
              </IconButton>
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: "none", md: "flex", alignItems: "center" },
                mr: 1,
              }}
            >
              <Link href={"/dashboard"}>
                <Button
                  fullWidth={true}
                  type="submit"
                  size="medium"
                  title={"POST YOUR AD"}
                  variant="outlined"
                  sx={{
                    color: "white",
                    backgroundColor: "primary.main",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                    mr: 2,
                    borderColor: "white",
                    height: "40px",
                  }}
                />
              </Link>
              <IconButton
                size="large"
                edge="end"
                // aria-label="account of current user"
                // aria-controls={menuId}
                // aria-haspopup="true"

                // onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  borderRadius: "5px",
                  p: 1,
                }}
              >
                <PermIdentityIcon
                  sx={{
                    fontSize: "33px",
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 0,
                  }}
                >
                  <Typography
                    noWrap
                    component="div"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "semibold",
                      },
                    }}
                  >
                    Account
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    noWrap
                    component="div"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                        color: "#bbbbbb",
                      },
                    }}
                  >
                    <Link href={"/login"}>Login</Link> or{" "}
                    <Link href={"/register"}>Register</Link>
                  </Typography>
                </Box>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex" } }}>
              <Link
                href={"/checkout"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  borderRadius: "5px",
                  p: 1,
                }}
              >
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={cart?.length} color="error">
                    <AddShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
