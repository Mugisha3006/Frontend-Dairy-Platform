import React from "react";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import ProductList from "./components/ProductList";

function Layout({ children }) {
  return (
    <> 
      {children}
    </>
  )
}

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route element={<Layout/>} />
            <Route path="/Products" element={<ProductList/> } />
          </Routes>
        </Router>
  );
}

export default App;