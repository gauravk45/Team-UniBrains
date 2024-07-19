import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct1, removeProduct1, clearCart1 } from "../redux";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Rating,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "./CSS/cart.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
    <div className="cart-container">
      <div className="cart-total">
        <h2 className="billing">Billing Conuter</h2>
        <br />
        <h3>
          Amount: <span className="span-amount">₹{totalAmount.toFixed(2)}</span>
        </h3>
        <h4 className="strong-discount">
          Discount:{" "}
          <span className="span-discount">
            -₹{totalDiscount.toFixed(2)}({discountInPercentage.toFixed(0)}%)
          </span>
        </h4>
        <h2>
          Total Amount:{" "}
          <span className="span-total">₹{amountAfterDiscount.toFixed(2)}</span>
        </h2>

        <Box display="flex" direction="row" spacing={2}>
          <Button
            variant="outlined"
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
          >
            <Link className="button-checkout-link" to="/checkout">
              CheckOut
            </Link>
          </Button>
        </Box>
      </div>
      <div className="cart-items">
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
                sx={{ width: 100, height: 100, marginRight: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">Price: ₹{item.price}</Typography>
                <Typography variant="body2">
                  Quantity: {item.quantity}
                </Typography>
                <Typography>
                  <Rating name="read-only" value={item.rating} readOnly />
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dispatch(removeProduct1(item.id))}
                >
                  -
                </Button>
                <Typography variant="body2" sx={{ marginX: 0 }}>
                  {item.quantity}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dispatch(addProduct1(item))}
                >
                  +
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Cart;
