import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography variant="h1" component="div" sx={{ mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" component="div" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you are looking for does not exist. It might have been moved or
        deleted.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go to Home Page
      </Button>
    </Box>
  );
}

export default NotFound;
