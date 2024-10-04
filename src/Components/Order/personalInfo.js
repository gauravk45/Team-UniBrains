import React from "react";
import { TextField, Grid } from "@mui/material";
import "../CSS/info.css";

const PersonalInfoForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="given-name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="family-name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="phone"
          label="Phone Number"
          name="phone"
          autoComplete="tel"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default PersonalInfoForm;
