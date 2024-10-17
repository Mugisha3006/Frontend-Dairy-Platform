import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";

function Home() {
    return (
        <div>
            <Navbar />
            <About/>
            <Footer/>
        </div>
    )
}

export default Home