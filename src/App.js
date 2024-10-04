import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./Components/Navbar";
import Home from "./Components/NavigationBar/Home";
import { Contact } from "./Components/NavigationBar/Contact";
import Products from "./Components/NavigationBar/Products";
import Cart from "./Components/NavigationBar/Cart";
import Checkout from "./Components/Order/checkout";
import Login from "./Components/NavigationBar/Login";
import Signup from "./Components/NavigationBar/Signup";
import Profile from "./Components/Profile/Profile";
import { Thankyou } from "./Components/Order/thankyou";
import { Footer } from "./Components/NavigationBar/Footer";
import Infomation from "./Components/Order/Infomation";
import Dashboard from "./Components/Profile/Dashboard";
import Account from "./Components/Profile/Account";
import NotFound from "./Components/NavigationBar/notFound";
import Wishlist from "./Components/Profile/wishList";

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
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Provider>
);

export default App;
