import React, { useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Button,
  Avatar,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Box, styled } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalstorageService from "../../utils/helpers/localstorage-services";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  padding: "0",
  margin: "0",
  position: "sticky",
  top: "0px",
  left: "0px",
  width: "100%",
  backgroundColor: theme.palette.customBg.white,
  color: theme.palette.customBg.contrastText,
  borderBottom: "2px solid #E6EDFF",
}));

const Topbar = ({ mobileOpen, setMobileOpen, lightColor, mainColor, currentLink }) => {
  const location = useLocation();

  // Dynamically change title for "Add New Product" page
  const dynamicTitle = useMemo(() => {
    if (location.pathname === "/admin-dashboard/product/add") {
      return "Frontend Management";
    }
    return currentLink;
  }, [location.pathname, currentLink]);

  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const [languageAnchor, setLanguageAnchor] = useState(null);
  const [userAnchor, setUserAnchor] = useState(null);
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    LocalstorageService.logoutUser();
    navigate('/login');
  };

  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBarStyled elevation={0} sx={{ py: 1 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, paddingBottom: { xs: "0.6rem", md: "0px" } }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "primary.main" }}
            fontWeight={700}
          >
            {dynamicTitle}
          </Typography>
        </Box>

        {/* Notifications */}
        <IconButton sx={{ backgroundColor: lightColor, color: mainColor, margin: "0 10px" }}>
          <Badge variant="dot" badgeContent={0} color="warning">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>

        {/* Language Selector */}
        <Button
          sx={{
            backgroundColor: lightColor,
            color: mainColor,
            textTransform: "none",
            borderRadius: "25px",
            margin: "0 10px",
            display: { xs: "none", md: "inherit" },
          }}
          endIcon={<ArrowDropDownIcon />}
        >
          Eng
        </Button>

        {/* User Avatar */}
        <IconButton>
          <Avatar>A</Avatar>
        </IconButton>
        <Typography
          variant="body1"
          sx={{
            ml: 1,
            fontSize: "16px",
            color: "#3F59A3",
            fontWeight: "600",
            display: { xs: "none", md: "block" },
          }}
        >
          Mr. Tanveer
          <Typography sx={{ fontSize: "14px", color: "text.primary" }}>
            Admin
          </Typography>
        </Typography>
      </Toolbar>
    </AppBarStyled>
  );
};

export default Topbar;
