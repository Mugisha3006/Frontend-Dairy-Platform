import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Banner from "../components/Banner";

function AboutPage() {
    return (
        <div id="about">
            <Navbar />
            <Banner />
            <About />
            <Footer />
        </div>
    );
}

export default AboutPage;