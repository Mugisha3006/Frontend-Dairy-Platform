import React from "react";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import ProductList from "./components/ProductList";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProductListPage from "./pages/ProductListPage";

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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductListPage />} />
          </Routes>
  );
}

export default App;