import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "./CSS/Contact.css";

export const Contact = () => (
  <>
    <div className="abouties">
      <Container className="container-about" maxWidth="100">
        <Paper elevation={3} className="paper-about">
          <Typography variant="h3" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Thank you for Choosing <Link to="/">@Team UniBrains</Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  </>
);
  