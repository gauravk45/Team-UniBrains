import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux";
import { addProduct1 } from "../redux";
import {
  Skeleton,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import "./CSS/products.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Pagination from "@mui/material/Pagination";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
    <div className="container-product">
      <h1>Products</h1>
      <div>
        <Box sx={{ maxWidth: 150, float: "right" }} className="product-box">
          <FormControl fullWidth>
            <InputLabel id="sort-label">Sort by Price</InputLabel>
            <Select
              labelId="sort-label"
              id="sort-select"
              value={sortBy}
              sx={{ width: "140px" }}
              label="Sort by Price"
              onChange={handleSortChange}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="priceAsc">Low to High</MenuItem>
              <MenuItem value="priceDesc">High to Low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "80vh", marginLeft: "150px" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search Product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="outlined"
        />
      </Box>

      <div className="products-grid">
        <Grid container spacing={2}>
          {loading
            ? Array.from(new Array(10)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                  <Card className="loading-skeleton">
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
                <Grid item xs={12} sm={6} md={4} lg={2} xl={2} key={product.id}>
                  <Card className="fetch-product-card">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={product.thumbnail}
                        alt={product.title}
                        className="fetch-product-image"
                      />
                      <CardContent>
                        <Typography variant="h6">{product.title}</Typography>
                        <Typography variant="body2">
                          ₹{product.price}
                        </Typography>
                        <Typography>
                          <Rating
                            name="read-only"
                            value={product.rating}
                            readOnly
                          />
                        </Typography>
                        <Box
                          display="flex"
                          direction="row"
                          sx={{ "& button": { m: 1 } }}
                        >
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <Button
                            variant="contained"
                            size="medium"
                            onClick={() => dispatch(addProduct1(product))}
                          >
                            Cart 
                            <AddShoppingCartIcon />
                          </Button>
                        </Box>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              ))}
        </Grid>
      </div>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={Math.ceil(filteredProducts.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </div>
  );
};

export default Products;
