import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Contact } from "./Components/Contact";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Checkout from "./Components/checkout";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import { Thankyou } from "./Components/thankyou";
import { Footer } from "./Components/Footer";
import Infomation from "./Components/Infomation";

const App = () => (
  <Provider store={store}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/thankyou🛒" element={<Thankyou />} />
      <Route path="/info" element={<Infomation />} />
    </Routes>
    <Footer />
  </Provider>
);

export default App;
