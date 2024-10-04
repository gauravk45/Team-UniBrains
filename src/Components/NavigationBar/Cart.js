import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct1, removeProduct1, clearCart1 } from "../../redux";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Rating,
  Link,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import "../CSS/cart.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalDiscount = cartItems.reduce(
    (total, item) =>
      total +
      (item.price * item.quantity * (item.discountPercentage || 0)) / 100,
    0
  );
  const amountAfterDiscount = totalAmount - totalDiscount;

  const discountInPercentage = (totalDiscount / totalAmount) * 100;

  return (
    <ThemeProvider theme={theme}>
      <Box className="cart-container">
        <Box className="cart-total">
          <Typography
            textAlign="center"
            sx={{ fontWeight: "600", fontSize: "30px" }}
          >
            Billing Conuter
          </Typography>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 1,
              borderRadius: 1,
            }}
          >
            Amount:{" "}
            <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
              ₹{totalAmount.toFixed(2)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 1,
              borderRadius: 1,
            }}
          >
            Discount:{" "}
            <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
              -₹{totalDiscount.toFixed(2)}({discountInPercentage.toFixed(0)}%)
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 1,
              borderRadius: 1,
              fontWeight: "300",
            }}
          >
            Total Amount:{" "}
            <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
              ₹{amountAfterDiscount.toFixed(2)}
            </Typography>
          </Box>

          <Box
            display="flex"
            direction="row"
            spacing={2}
            sx={{ marginTop: "90px" }}
          >
            <Button
              sx={{ borderRadius: "10px", fontSize: "17px", fontWeight: "600" }}
              variant="contained"
              startIcon={<DeleteIcon />}
              size="medium"
              onClick={() => dispatch(clearCart1())}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              size="medium"
              sx={{ borderRadius: "10px" }}
            >
              <Link
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
                href="/checkout"
              >
                CheckOut
              </Link>
            </Button>
          </Box>
        </Box>
        <Box className="cart-items">
          <Box display="flex" flexDirection="column" gap={2} width="155vh">
            {cartItems.map((item) => (
              <Card
                key={item.id}
                sx={{ display: "flex", alignItems: "center", padding: 2 }}
              >
                <CardMedia
                  component="img"
                  image={item.thumbnail}
                  alt={item.name}
                  sx={{ width: 150, height: 150, marginRight: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontSize: "20px" }} variant="h6">
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }} variant="body2">
                    Price: ₹{item.price}
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }} variant="body2">
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    <Rating name="read-only" value={item.rating} readOnly />(
                    {item.rating}⭐)
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => dispatch(removeProduct1(item.id))}
                    sx={{
                      borderRadius: "10px",
                      background: "rgba(0,123,255,255)",
                      color: "white",
                    }}
                  >
                    <RemoveIcon sx={{ fontWeight: "600" }} />
                  </Button>
                  <Typography
                    variant="body2"
                    sx={{ marginX: 0, fontWeight: "600", fontSize: "21px" }}
                  >
                    {item.quantity}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => dispatch(addProduct1(item))}
                    sx={{
                      borderRadius: "10px",
                      background: "rgba(0,123,255,255)",
                      color: "white",
                    }}
                  >
                    <AddIcon />
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Cart;
