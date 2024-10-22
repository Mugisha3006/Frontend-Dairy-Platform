import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { storeUser } from "../UserHelper";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

function Login() {
    const [input, setInput] = useState({
        identifier: "",
        Password: "",
    });
    const [errors, setErrors] = useState({
        identifier: "",
        Password: "",
    });

    const validateEmail = (identifier) => {
        if (!validator.isEmail(identifier)) {
            setErrors({ ...errors, identifier: "Invalid Email format." });
            return false;
        }
        setErrors({ ...errors, identifier: "" });
        return true;
    };

    const validatePassword = (Password) => {
        if (Password.length < 8) {
            setErrors({
                ...errors,
                password: "Password must be at least 8 characters long.",
            });
            return false;
        }
        setErrors({ ...errors, Password: "" });
        return true;
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid =
            validateEmail(input.identifier) && validatePassword(input.Password);
        if (!isValid) {
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:3300/api/V1/users/login",
                input
            );

            if (!response.data.jwt) {
                setErrors({
                    ...errors,
                    identifier: "Invalid email password combination.",
                });
                throw new Error("Invalid email password combination.");
            }
            storeUser(response.data);
            navigate("/products");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Navbar />
            <section className=" p-8 mt-20">
                <div className="bg-white rounded-2xl border-[#205b75] w-full md:w-[50%] m-auto pt-[2em] pb-[2em] border-8">
                    <Link to="/">
                        <h1 className="font-bold text-4xl text-[#205b75] text-center mb-[1em]">
                            Amor<span className="text-[#bf8b56]">Amor's</span>
                        </h1>
                    </Link>
                    <h2 className="text-center text-3xl font-bold text-[#205b75]">
                        Sign In
                    </h2>
                    <div className="mt-4">
                        <form onSubmit={handleSubmit}>
                            <div className="flex w-[80%] m-auto justify-center">
                                <label htmlFor="email" className="text-lg m-[0] font-normal" />
                                <input
                                    id="identifier"
                                    type="Email"
                                    className="w-4/5 rounded p-2 mt-4 placeholder-[#205b75] border border-gray-300 text-[#205b75] focus:outline-none"
                                    placeholder="Email"
                                    onChange={(e) => {
                                        setInput({ ...input, identifier: e.target.value });
                                        validateEmail(e.target.value);
                                    }}
                                    value={input.identifier}
                                />
                            </div>
                            {errors.identifier && (
                                <p className="text-center text-red-500">{errors.identifier}</p>
                            )}
                            <div className="relative flex w-[80%] m-auto justify-center">
                                <label htmlFor="Password" className="text-lg m-[0] font-normal" />
                                <input
                                    id="Password"
                                    type="Password"
                                    className="w-4/5 rounded p-2 mt-4 placeholder-[#205b75] border border-gray-300 text-[#205b75] focus:outline-none"
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setInput({ ...input, Password: e.target.value });
                                        validatePassword(e.target.value);
                                    }}
                                    value={input.Password}
                                />
                                <span className="absolute top-[55%] transform -translate-y-1/4 right-[15%] text-[#205b75] text-[20px]">
                                    <i className="bx bx-low-vision"></i>
                                </span>
                            </div>
                            {errors.Password && (
                                <p className="text-center text-red-500">{errors.Password}</p>
                            )}
                            <div className="mt-8 flex justify-center">
                                <div>
                                    <p className="text-center text-[#bf8b56]">Forgot password?</p>
                                </div>
                            </div>
                            <div className="flex justify-center m-auto w-[80%]">
                                <button
                                    type="submit"
                                    className="text-white mt-4 w-4/5 font-medium text-base rounded py-2 font-bold bg-[#205b75]"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        {errors.general && <p className="text-red-500">{errors.general}</p>}
                        <div>
                            <p className="mt-4 text-[#205b75] text-center">
                                Don't have an account?{" "}
                                <Link to="/signup" className="text-[#bf8b56]">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                        <div className="mt-8 flex-col gap-y-4">
                            <p className="text-[#205b75] text-center">Or</p>
                            <div className="flex justify-center m-auto w-[80%]">
                                <Link className="flex w-4/5 py-2 mt-4 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all rounded bg-[#205b75] text-white text-[0.75rem] md:text-lg font-bold border border-gray-300 text-[#061f77] focus:outline-none">
                                    <i className="bx bxl-google mr-2"></i>Sign in with Google
                                </Link>
                            </div>
                            <div className="flex justify-center m-auto w-[80%]">
                                <Link className="flex w-4/5 py-2 mt-4 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] transition-all rounded bg-[#205b75] text-white text-[0.75rem] md:text-lg font-bold border border-gray-300 text-[#061f77] focus:outline-none">
                                    <i className="bx bxl-facebook-circle mr-2"></i>Sign in with Facebook
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Login;
