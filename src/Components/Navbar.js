import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./CSS/Navbar.css";

const Navbar = () => (
  <AppBar position="static" className="navbar">
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, fontSize: "25px" }}
      >
        TeamUniBrains
      </Typography>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Button
            color="inherit"
            component={NavLink}
            exact
            to="/"
            activeClassName="active"
          >
            Home
          </Button>
        </li>
        <li className="navbar-item">
          <Button
            color="inherit"
            component={NavLink}
            to="/contactus"
            activeClassName="active"
          >
            Contact
          </Button>
        </li>
        <li className="navbar-item">
          <Button
            color="inherit"
            component={NavLink}
            to="/products"
            activeClassName="active"
          >
            Products
          </Button>
        </li>
        <li className="navbar-item">
          <Button
            color="inherit"
            component={NavLink}
            to="/cart"
            activeClassName="active"
          >
            Cart
          </Button>
        </li>
        <li className="navbar-item">
          <Button
            color="inherit"
            component={NavLink}
            to="/signup"
            activeClassName="active"
          >
            Signup
          </Button>
        </li>
        <li className="navbar-item">
          <Button
            color="inherit"
            component={NavLink}
            to="/profile"
            activeClassName="active"
          >
            Profile
          </Button>
        </li>
      </ul>
    </Toolbar>
  </AppBar>
);

export default Navbar;
