import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import "../CSS/log.css";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/profile");
      alert("You are Already Logged In.");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", true);
      setError("");
      alert("Login successful!");
      navigate("/profile");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="containers-signup">
        <div className="container232">
          <h2 className="hello">Login</h2>
          <form className="form" onSubmit={handleLogin}>
            <div className="div-field">
              <TextField
                className="input"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="div-field">
              <TextField
                className="input"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                variant="outlined"
              />
            </div>
            <span className="span">
              Create a New Account? <Link to="/signup">SignUp</Link>
            </span>
            <br />
            {error && <Alert severity="error">{error}</Alert>}
            <Stack sx={{ marginTop: 2 }}>
              <Button
                className="Button"
                variant="contained"
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
