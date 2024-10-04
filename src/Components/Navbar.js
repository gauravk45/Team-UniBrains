import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

// import Badge from "@mui/material/Badge";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";

const pages = ["Home", "Products", "Contact", "Cart", "Signup"];
const settings = ["Profile", "Account", "Wishlist", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const [showMessages, setShowMessages] = React.useState(false);
  // const [showNotifications, setShowNotifications] = React.useState(false);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const toggleMessages = () => setShowMessages(!showMessages);
  // const toggleNotifications = () => setShowNotifications(!showNotifications);

  const handleUserMenuClick = (setting) => {
    handleCloseUserMenu();
    switch (setting) {
      case "Profile":
        navigate("/profile");
        break;
      case "Account":
        navigate("/account");
        break;
      case "Dashboard":
        navigate("/dashboard");
        break;
      case "Wishlist":
        navigate("/wishlist");
        break;
      case "Logout":
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        alert(`${currentUser.name} LogOut SuccesFully.`);
        navigate("/login");
        break;
      default:
        break;
    }
  };

  const handleNavigate = (page) => {
    handleCloseNavMenu();
    if (page.toLowerCase() === "home") {
      navigate("/");
    } else if (page.toLowerCase() === "contact") {
      navigate("/contactus");
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{ fontWeight: "bold", fontSize: "30px" }}
                  key={page}
                  onClick={() => handleNavigate(page)}
                >
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "30px" }}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigate(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box display="flex" direction="row">
            <MenuItem onClick={toggleMessages}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <Typography variant="body1">Messages</Typography>
            </MenuItem>
            <MenuItem onClick={toggleNotifications}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={10} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Typography variant="body1">Notification</Typography>
            </MenuItem>
          </Box>

          {showMessages && (
            <Box
              sx={{
                position: "absolute",
                top: 60,
                borderRadius: "10px",
                right: 220,
                backgroundColor: "white",
                padding: 2,
                boxShadow: 1,
              }}
            >
              <Typography sx={{ color: "black" }} variant="h6">
                Messages
              </Typography>
              <Typography sx={{ color: "black" }} variant="body2">
                You have 4 new messages.
              </Typography>
              <Typography sx={{ color: "black" }} variant="body2">
                You have Update Name.
              </Typography>
              <Typography sx={{ color: "black" }} variant="body2">
                You have Update Password.
              </Typography>
              <Typography sx={{ color: "black" }} variant="body2">
                You have upadate Email.
              </Typography>
            </Box>
          )}

          {showNotifications && (
            <Box
              sx={{
                position: "absolute",
                top: 60,
                borderRadius: "10px",
                right: -20,
                backgroundColor: "white",
                padding: 2,
                boxShadow: 3,
              }}
            >
              <Typography sx={{ color: "black" }} variant="h6">
                Notifications
              </Typography>
              <Typography sx={{ color: "black" }} variant="body2">
                You have 10 new notifications.
              </Typography>
            </Box>
          )} */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/236x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleUserMenuClick(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
