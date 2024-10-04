import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import "../CSS/profile.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Zain:wght@200;300;400;700;800;900&display=swap');
</style>;

const theme = createTheme({
  typography: {
    fontFamily: ["Zain", "sans-serif"].join(","),
  },
});

const Profile = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    alert("Logout successful!");
    navigate("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="profiles-containers">
        <Card className="profile-card">
          <CardContent>
            <div className="profile-avatar">
              <Avatar
                alt={currentUser.name}
                src="/static/images/avatar/1.jpg"
                sx={{ width: 80, height: 80 }}
              />
            </div>
            <Typography variant="h4" component="div" className="profile-name">
              {currentUser.name}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className="profile-email"
            >
              {currentUser.email}
            </Typography>
            <Stack mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default Profile;
