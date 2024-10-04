import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux";
import { addProduct1 } from "../../redux";
import {
  Skeleton,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
  IconButton,
  Pagination,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../CSS/products.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Zain", "sans-serif"].join(","),
  },
});

const Products = () => {
  const [isInWishlist, setIsInWishlist] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const wishlistMap = wishlist.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {});
    setIsInWishlist(wishlistMap);
  }, []);

  const handleWishlistToggle = (productId) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isProductInWishlist = isInWishlist[productId];

    if (isProductInWishlist) {
      const updatedWishlist = wishlist.filter((item) => item.id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsInWishlist((prev) => ({ ...prev, [productId]: false }));
    } else {
      const productToAdd = products.find((item) => item.id === productId);
      const updatedWishlist = [...wishlist, productToAdd];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsInWishlist((prev) => ({ ...prev, [productId]: true }));
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortProducts = () => {
    switch (sortBy) {
      case "priceAsc":
        return filteredProducts.slice().sort((a, b) => a.price - b.price);
      case "priceDesc":
        return filteredProducts.slice().sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortProducts().slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="container-product">
        <Typography sx={{ fontSize: "40px", textAlign: "center" }}>
          Products
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box sx={{ maxWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel sx={{ fontSize: "20px" }} id="sort-label">
                Sort by Price
              </InputLabel>
              <Select
                labelId="sort-label"
                id="sort-select"
                value={sortBy}
                sx={{ width: "140px", fontSize: "20px" }}
                label="Sort by Price"
                onChange={handleSortChange}
              >
                <MenuItem sx={{ fontSize: "20px" }} value="default">
                  Default
                </MenuItem>
                <MenuItem sx={{ fontSize: "20px" }} value="priceAsc">
                  Low to High
                </MenuItem>
                <MenuItem sx={{ fontSize: "20px" }} value="priceDesc">
                  High to Low
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "65vh", fontSize: "30px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Search Product"
              value={searchTerm}
              sx={{ fontSize: "30px" }}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
            />
          </Box>
        </Box>

        <Grid container spacing={2}>
          {loading
            ? Array.from(new Array(10)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        <Skeleton variant="rounded" width={200} height={200} />
                        <Skeleton variant="text" width={150} height={45} />
                        <Skeleton variant="text" width={50} height={30} />
                        <Skeleton variant="text" width={80} height={30} />
                        <Skeleton variant="text" width={80} height={38} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : currentProducts.map((product) => (
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
                        <Typography sx={{ fontSize: "22px" }} variant="body2">
                          ₹{product.price}
                        </Typography>
                        <Typography sx={{ fontSize: "20px" }}>
                          <Rating
                            sx={{ fontSize: "25px" }}
                            name="read-only"
                            value={product.rating}
                            precision={0.5}
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
                            sx={{
                              color: isInWishlist[product.id] ? "red" : "gray",
                            }}
                            onClick={() => handleWishlistToggle(product.id)}
                          >
                            {isInWishlist[product.id] ? (
                              <Favorite />
                            ) : (
                              <FavoriteBorder />
                            )}
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
              ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={Math.ceil(filteredProducts.length / productsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Products;
