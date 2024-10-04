import React from "react";
import { Container, Typography, Paper, Link } from "@mui/material";
// import { Link } from "react-router-dom";
import "../CSS/Contact.css";
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

export const Contact = () => (
  <>
    <ThemeProvider theme={theme}>
      <div className="abouties">
        <Container className="container-about" maxWidth="100">
          <Paper
            elevation={3}
            sx={{
              height: "auto",
              width: "auto",
              textAlign: "center",
              borderRadius: "8px",
              padding: "30px",
              marginBottom: "58vh",
            }}
          >
            <Typography
              sx={{ fontSize: "65px", fontWeight: "550" }}
              variant="h3"
              component="h1"
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontSize: "23px",
                color: "black",
                fontWeight: "300",
              }}
              variant="body1"
            >
              Thank you for Choosing{" "}
              <Link sx={{ textDecoration: "none" }} href="/">
                @Team UniBrains
              </Link>
            </Typography>
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  </>
);
