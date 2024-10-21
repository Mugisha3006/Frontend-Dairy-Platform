import React from "react";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import ProductList from "./components/ProductList";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";

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
            <Route path="/products" element={<ProductList/> } />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
  );
}

export default App;