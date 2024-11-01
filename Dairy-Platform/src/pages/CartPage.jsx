import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Banner from "../components/Banner";


const CartPage = () => {
    
    return (
        <div className="container mx-auto px-4 py-8">
            <Navbar/>
            <Banner/>
            <Cart/>
            <Footer/>
        </div>
    )
}; 

export default CartPage;