import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Typography, Paper, Link } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import "../CSS/home.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Zain:wght@200;300;400;700;800;900&display=swap');
</style>;

const theme = createTheme({
  typography: {
    fontFamily: ["Zain", "sans-serif"].join(","),
  },
});

const Home = () => (
  <>
    <ThemeProvider theme={theme}>
      <div className="Homies">
        <Container className="container-home" maxWidth="100">
          <Paper
            elevation={3}
            sx={{
              height: "auto",
              width: "auto",
              textAlign: "center",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "58vh",
            }}
          >
            <Typography
              sx={{ fontSize: "65px", fontWeight: "550" }}
              variant="h3"
              component="h1"
              gutterBottom
            >
              Home
            </Typography>
            <Typography
              sx={{ fontSize: "30px", fontWeight: "300" }}
              variant="body1"
            >
              Welcome to our store!
            </Typography>

            <Link
              sx={{
                fontSize: "30px",
                fontWeight: "300",
                textDecoration: "none",
                fontFamily: ["Zain", "sans-serif"],
              }}
              href="/products"
            >
              Shopping with Us...
              <LocalMallIcon />
            </Link>
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  </>
);

export default Home;
