import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart1 } from "../redux";
import { useNavigate } from "react-router-dom";
import "./CSS/checkout.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handlePlaceOrder = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      alert("Please login to place an order.");
      navigate("/login");
    } else {
      alert("Order placed successfully!");
      dispatch(clearCart1());
      navigate("/info");
    }
  };

  return (
    <Container className="checkout-container" maxWidth="md">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        component="h1"
        gutterBottom
      >
        Checkout
      </Typography>
      <div className="order-summary">
        <Typography
          sx={{ textAlign: "center" }}
          variant="h5"
          component="h2"
          gutterBottom
        >
          Order Summary
        </Typography>
        {cart.map((item) => (
          <Card
            key={item.id}
            className="order-item"
            sx={{ display: "flex", mb: 2 }}
          >
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={item.thumbnail}
              alt={item.title}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Typography component="h3" variant="h5">
                  {item.title}
                </Typography>
                <Typography variant="body1">Price: {item.price}</Typography>
                <Typography variant="body1">
                  Quantity: {item.quantity}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          <Button
            endIcon={<KeyboardArrowRight />}
            variant="contained"
            color="primary"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </Box>
      </div>
    </Container>
  );
};

export default Checkout;