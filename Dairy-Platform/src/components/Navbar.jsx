import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userData, storeUser } from "../UserHelper";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = userData();
        if (user && user.email) {
            setIsLoggedIn(true);
            setEmail(user.email);
        }
        window.scrollTo(0, 0);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        storeUser({});
        setIsLoggedIn(false);
        setEmail("");
        navigate("/Login");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <section className="bg-white text-[#205b75] fixed top-0 left-0 right-0 z-50 w-full">
                <div className="relative flex items-center justify-between m-auto w-[80%] max-w-screen-xl py-4 ">
                    <Link to="/" className="site-title font-bold text-2xl">
                        Amor<span className="text-[#bf8b56]">Amor's</span>
                    </Link>
                    <div className="flex items-center w-full justify-end md:hidden ">
                        <Link onClick={toggleMenu} className="text-3xl">
                            <i className={`bx ${menuOpen ? 'bx-x font-bold' : 'bx-menu font-bold'}`}></i>
                        </Link>
                    </div>
                    <nav className={`absolute md:relative md:left-auto md:top-auto bg-[#bf8b56] md:bg-transparent block md:flex flex-col md:flex-row md:items-center md:w-full top-10 md:top-5 right-0 left-0  pt-20 md:pt-0 pb-20 md:pb-0 mt-5 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:flex transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 `} >
                        <ul className="flex flex-col md:flex-row m-auto font-bold text-center  ">
                            <li>
                                <Link to="/" className="hover:text-[white] md:hover:text-[#bf8b56]">
                                    HOME
                                </Link>
                            </li>
                            <li className="hover:text-[white] md:hover:text-[#bf8b56] my-4 md:my-0 md:ml-8">
                                <Link to="/products">
                                    PRODUCTS
                                </Link>
                            </li>
                            <li className="hover:text-[white] md:hover:text-[#bf8b56] my-4 md:my-0 md:mx-8">
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li className="hover:text-[white] md:hover:text-[#bf8b56]">
                                <Link to="/contact">CONTACT</Link>
                            </li>
                            <li className="hover:text-[white] md:hover:text-[#bf8b56] my-4 md:my-0 md:ml-8">
                                <Link className="" to="/help">
                                    HELP
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 md:mt-0">
                            {isLoggedIn ? (
                                <>
                                    <li className="hover:text-[white] md:hover:text-[#bf8b56] ">
                                        <Link className="md:mr-4 font-bold cursor-pointer" to="">
                                            
                                        </Link>
                                    </li>
                                    <li className="hover:text-[white] md:hover:text-[#bf8b56] my-4 md:my-0 cursor-pointer">
                                        <span>
                                            <i className="bx bx-user md:pr-2 font-bold text-[1.5rem]"></i>
                                        </span>
                                        <span className="nav-links">{email}</span>
                                    </li>
                                    <li className="hover:text-[white] md:hover:text-[#205b75]">
                                        <Link
                                            to="/"
                                            onClick={handleLogout}
                                            className="text-white bg-[#205b75] py-[0.25em] px-[0.875em] hover:text-white hover:bg-[#bf8b56] md:hover:bg-[#bf8b56] md:hover:text-[#205b75] md:text-white rounded-2xl font-normal md:ml-4"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                        <li className="hover:text-[white] md:hover:text-[#bf8b56] active my-4 md:my-0 md:ml-0">
                                        <Link
                                            className="font-bold"
                                            to="/login"
                                            style={{ whiteSpace: "nowrap" }}
                                        >
                                            Log In
                                        </Link>
                                    </li>
                                        <li className="hover:text-[white] md:hover:text-[#bf8b56] my-4 md:my-0 md:ml-4">
                                        <Link
                                            to="/signup"
                                                className="text-[#f2f2f2] bg-[#205b75] py-[0.25em] px-[0.875em] hover:text-[#205b75] hover:bg-[#fefefe] md:hover:bg-[#bf8b56] md:hover:text-[#205b75] md:text-[#fefefe] rounded-2xl font-normal"
                                        >
                                            Sign Up
                                        </Link>
                                        
                                    </li>
                                    <li>
                                            <Link to="/cart" className="text-[#205b75] text-2xl md:hover:text-[#bf8b56] md:hover:text-[#205b75]">
                                            <i className ='bx bxs-cart'></i>
                                        </Link>
                                    </li>

                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    );
}

export default Navbar;
