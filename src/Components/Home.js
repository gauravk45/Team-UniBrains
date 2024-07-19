import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import "./CSS/home.css";

const Home = () => (
  <>
    <div className="Homies">
      <Container className="container-home" maxWidth="100">
        <Paper elevation={3} className="paper-home">
          <Typography variant="h3" component="h1" gutterBottom>
            Home
          </Typography>
          <Typography variant="body1">Welcome to our store!</Typography>
        </Paper>
      </Container>
    </div>
  </>
);

export default Home;
