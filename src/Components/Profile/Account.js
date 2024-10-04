import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Zain:wght@200;300;400;700;800;900&display=swap');
</style>;

const theme = createTheme({
  typography: {
    fontFamily: ["Zain", "sans-serif"].join(","),
    fontSize: "30px",
  },
});

function Account() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setUser({
        name: currentUser.name || "",
        email: currentUser.email || "",
        password: currentUser.password || "",
      });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Account details updated!");
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            padding: 3,
            maxWidth: 600,
            margin: "auto",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Account Settings
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              name="name"
              value={user.name}
              onChange={handleChange}
              sx={{ fontSize: "20px" }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              name="email"
              value={user.email}
              onChange={handleChange}
              sx={{ fontSize: "20px" }}
            />
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              name="password"
              value={user.password}
              onChange={handleChange}
              sx={{ fontSize: "20px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ fontSize: "25px" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, fontSize: "20px", textAlign: "center" }}
              onClick={handleSave}
            >
              <Link
                sx={{ color: "white", textDecoration: "none" }}
                href="/profile"
              >
                Save Changes
              </Link>
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Account;
