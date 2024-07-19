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
import "./CSS/profile.css";

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
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
