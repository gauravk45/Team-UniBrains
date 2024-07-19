import React from "react";
import "./CSS/footer.css";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Divider } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <div className="container-footer">
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              @2024 Copyright{" "}
              <Link className="footer-link" to="/">
                TeamUniBrains
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Contact Us</Typography>
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
                        to=""
                      >
                        Skyview Business Horizon, Sagwadi, Nana Varachha, Surat
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
                    <Typography variant="body2">+91 9054752304</Typography>
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
                        to="mailto:contact@example.com"
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
  );
};
