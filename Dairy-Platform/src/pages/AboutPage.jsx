import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

function AboutPage() {
    return (
        <div id="about">
            <Navbar />
            <About />
            <Footer />
        </div>
    );
}

export default AboutPage;