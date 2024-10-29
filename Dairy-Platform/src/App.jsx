import React from "react";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import ProductList from "./components/ProductList";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProductListPage from "./pages/ProductListPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import Order from "./pages/Order";

function Layout({ children }) {
  return (
    <> 
      {children}
      <Footer/>
    </>
  )
}

function App() {
  return (
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route element={<Layout/>} />
            <Route path="Signup" element={ <Signup/>} />
            <Route path="Login" element={ <Login/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<Order/> } />
          </Routes>
  );
}

export default App;