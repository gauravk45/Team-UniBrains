import React from "react";
import { TextField, Grid } from "@mui/material";
import "./CSS/info.css";

const AddressInfoForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="addressLine1"
          label="Address Line 1"
          name="addressLine1"
          autoComplete="address-line1"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="addressLine2"
          label="Address Line 2"
          name="addressLine2"
          autoComplete="address-line2"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="city"
          label="City"
          name="city"
          autoComplete="address-level2"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="state"
          label="State"
          name="state"
          autoComplete="address-level1"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="zipCode"
          label="Zip Code"
          name="zipCode"
          autoComplete="postal-code"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="country"
          label="Country"
          name="country"
          autoComplete="country"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default AddressInfoForm;
