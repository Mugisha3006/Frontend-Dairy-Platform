import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <ProductList/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home