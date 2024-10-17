import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-section lg:flex lg:justify-around bg-[#205b75] text-white mt-20 pt-5 pb-5">
            <section id="companyLogoMedia" className="p-8 lg:flex lg:items-center">
                <div className="flex flex-col items-center">
                    <Link to="/">
                        <h3 className="text-2xl font-bold mb-2">
                            Amor<span style={{ color: "#bf8b56" }}>Amor's</span>
                        </h3>
                    </Link>

                    <ul className="flex justify-around">
                        <li>
                            <i className="bx bxl-facebook-circle text-2xl social-icons"></i>
                        </li>
                        <li>
                            <i className="bx bxl-twitter text-2xl social-icons pl-4"></i>
                        </li>
                        <li>
                            <i className="bx bxl-instagram text-2xl social-icons pl-4"></i>
                        </li>
                    </ul>
                </div>
            </section>
            <section id="Links" className="p-8 text-center">
                <h4 id="h4" className="text-[#bf8b56] text-2xl font-medium">
                    Links
                </h4>
                <div className="footer-links-primary text-center">
                    <ul>
                        <li>
                            <Link to="/" className="footer-links">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="footer-links">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="footer-links">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="copyright mt-6">
                        <p>© AmorAmor's {new Date().getFullYear()}</p>
                    </div>
                </div>
            </section>
            <section id="contact" className="p-8 text-center lg:text-right">
                <h4 className="text-[#bf8b56] text-2xl font-medium">Contact Info</h4>
                <p>Plot 245, Zion Towers</p>
                <p>+256746592030</p>
                <p>info@amoramors.com</p>
            </section>
        </div>
    );
}

export default Footer;
