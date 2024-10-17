import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Banner from "../components/Banner";

function Home() {
    return (
        <div>
            <Navbar />
            <Banner/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home