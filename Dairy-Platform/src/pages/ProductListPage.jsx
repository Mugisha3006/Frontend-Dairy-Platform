import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";



function ProductListPage() {
    return (
        <div id="productlistpage">
            <Navbar />
            <Banner title={"Products"}/>
            <ProductList />
            <Footer/>

        </div>
    )
}; 

export default ProductListPage;