import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CSS/signup.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError("User already exists");
    } else {
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setError("");
      alert("Signup successful!");
      navigate("/login");
    }
  };

  return (
    <div className="containers-signup">
      <div className="container2">
        <h2 className="hello">Signup</h2>
        <form className="form" onSubmit={handleSignup}>
          <div className="div">
            <TextField
              className="input"
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="div">
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
          <div className="div">
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
          <div className="div">
            <TextField
              className="input"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              fullWidth
              variant="outlined"
            />
          </div>
          <span className="span">
            Already have an account? <Link to="/login">Login</Link>
          </span>
          <br />
          {error && <Alert severity="error">{error}</Alert>}
          <Stack sx={{ marginTop: 2 }}>
            <Button className="Button" variant="contained" type="submit" fullWidth>
              Signup
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default Signup;
