import React from "react";
import "../CSS/footer.css";
import { Container, Grid, Typography, Divider, Link } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
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

export const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container-footer">
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontSize: "28px" }}>
                @2024 Copyright{" "}
                <Link sx={{ color: "black" }} className="footer-link" href="/">
                  TeamUniBrains
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "25px", color: "black" }}
                  >
                    Contact Us
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <RoomIcon />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">
                        <Link
                          className="footer-link"
                          href="https://www.google.com/maps/place/Team+Unibrains/@21.2382211,72.9088546,17z/data=!3m1!4b1!4m6!3m5!1s0x3be045f4c092baf7:0xd11ae37dfa7cc8c3!8m2!3d21.2382161!4d72.9114295!16s%2Fg%2F11pkhqj4ds?entry=ttu"
                          sx={{ fontSize: "19px", color: "black" }}
                        >
                          Skyview Business Horizon, Sagwadi, Nana Varachha,
                          Surat
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <PhoneIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{ fontSize: "19px", color: "black" }}
                        variant="body2"
                      >
                        +91 9054752304
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <EmailIcon />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">
                        <Link
                          className="footer-link"
                          href="mailto:contact@example.com"
                          sx={{ fontSize: "19px", color: "black" }}
                        >
                          info@teamunibrains.com
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};
