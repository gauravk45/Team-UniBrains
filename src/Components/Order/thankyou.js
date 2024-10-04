import React from "react";
import "../CSS/thankyou.css";
import { Container, Typography, Paper } from "@mui/material";
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

export const Thankyou = () => {
  const min = 100000;
  const max = 999999;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="Homies">
          <Container className="container-home" maxWidth="100">
            <Paper elevation={3} className="paper-home">
              <Typography variant="h3" component="h1" gutterBottom>
                Order Id: #{randomNum}
              </Typography>
              <Typography variant="h6">Thank You for Shopping.!</Typography>
              <Typography variant="body2">Visit Again..!</Typography>
            </Paper>
          </Container>
        </div>
      </>
    </ThemeProvider>
  );
};
