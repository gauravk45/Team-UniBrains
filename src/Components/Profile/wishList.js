import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  IconButton,
  Button,
  Link,
} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { addProduct1 } from "../../redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: ["Zain", "sans-serif"].join(","),
  },
});

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className="container-wishlist">
          <Typography sx={{ fontSize: "40px", textAlign: "center" }}>
            My Wishlist
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {wishlist.length === 0 ? (
              <Typography
                variant="h6"
                sx={{ textAlign: "center", width: "100%" }}
              >
                Your wishlist is empty.
              </Typography>
            ) : (
              wishlist.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Card>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "60vh",
                        position: "relative",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="100%"
                        image={product.thumbnail}
                        alt={product.title}
                      />
                      <CardContent>
                        <Typography sx={{ fontSize: "25px" }} variant="h6">
                          {product.title}
                        </Typography>
                        <Typography sx={{ fontSize: "25px" }} variant="body2">
                          ₹{product.price}
                        </Typography>
                        <Typography>
                          <Rating
                            name="read-only"
                            value={product.rating}
                            readOnly
                          />
                          ({product.rating}⭐)
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 2,
                          }}
                        >
                          <IconButton
                            sx={{ color: "red" }}
                            onClick={() => handleRemoveFromWishlist(product.id)}
                          >
                            <Favorite />
                          </IconButton>
                          <Button
                            variant="contained"
                            size="medium"
                            onClick={() => dispatch(addProduct1(product))}
                            sx={{
                              ml: 1,
                              fontSize: "18px",
                              fontWeight: "300px",
                            }}
                          >
                            Add to Cart
                            <ShoppingCartIcon />
                          </Button>
                        </Box>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Link href="/products" style={{ textDecoration: "none" }}>
              <Button sx={{ fontSize: "20px" }} variant="contained">
                Back
              </Button>
            </Link>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Wishlist;
