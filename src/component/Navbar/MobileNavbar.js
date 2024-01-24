import { useState } from "react";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  Home as HomeIcon,
  AccountCircle as AccountIcon,
  AddBox as PostAddIcon,
  Login as LoginIcon,
} from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/navigation";

export default function MobileNavbar() {
  const [value, setValue] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  return (
    <Box sx={{ pb: 7 }} display={{ md: "none", sm: "block" }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction
            onClick={() => navigate("/")}
            label="Home"
            icon={<HomeIcon />}
          />

          {isLoggedIn ? (
            <BottomNavigationAction
              onClick={() => navigate("/account")}
              label="Account"
              icon={<AccountIcon />}
            />
          ) : (
            <BottomNavigationAction
              onClick={() => navigate("/login")}
              label="Login"
              icon={<LoginIcon />}
            />
          )}

          <BottomNavigationAction
            onClick={() => navigate("/post-ad")}
            label="Post Ad"
            icon={<PostAddIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
