import React, { useState } from "react";
import {
  TextField,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const PaymentMethodForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case "Credit Card":
      case "Debit Card":
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="cardName"
                label="Name on Card"
                name="cardName"
                autoComplete="cc-name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="cardNumber"
                label="Card Number"
                name="cardNumber"
                autoComplete="cc-number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="expiryDate"
                label="Expiry Date"
                name="expiryDate"
                autoComplete="cc-exp"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="cvv"
                label="CVV"
                name="cvv"
                autoComplete="cc-csc"
                variant="outlined"
              />
            </Grid>
          </>
        );
      case "UPI":
        return (
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="upiId"
              label="UPI ID"
              name="upiId"
              variant="outlined"
            />
          </Grid>
        );
      case "Net Banking":
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="bankName"
                label="Bank Name"
                name="bankName"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="account"
                label="Account Number"
                name="account"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="cnfaccount"
                label="Confirm Account Number"
                name="cnfaccount"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="ifsc"
                label="Bank IFSC Code"
                name="ifsc"
                variant="outlined"
              />
            </Grid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <br />
            <InputLabel id="payment-method-label">Payment Method</InputLabel>
            <Select
              labelId="payment-method-label"
              id="payment-method"
              value={paymentMethod}
              label="Payment Method"
              onChange={handlePaymentMethodChange}
            >
              <MenuItem value="Credit Card">Credit Card</MenuItem>
              <MenuItem value="Debit Card">Debit Card</MenuItem>
              <MenuItem value="UPI">UPI</MenuItem>
              <MenuItem value="Net Banking">Net Banking</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {renderPaymentFields()}
      </Grid>
    </>
  );
};

export default PaymentMethodForm;
