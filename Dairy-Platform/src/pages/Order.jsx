import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Order = () => {
    return (
        <div className="container mx-auto px-4 py-8">
        <Navbar/>
        <div className="bg-gray-100 ">
            <div className="w-full max-w-3xl mx-auto p-8">
                <div className="bg-white  p-8 rounded-lg shadow-md border ">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                        Checkout
                    </h1>

                    {/* <!-- Shipping Address --> */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold  ">Shipping Address</h2>

                        <div className="mt-4">
                            <label htmlFor="address" className="block mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="w-full rounded-lg border py-2 px-3 "
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="city" className="blockmb-1">
                                District
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="w-full rounded-lg border py-2 px-3 "
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="state" className="block">
                                    Street
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    className="w-full rounded-lg border py-2 px-3"
                                />
                            </div>
                            <div>
                                <label htmlFor="zip" className="block mb-1">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="zip"
                                    className="w-full rounded-lg border py-2 px-3 "
                                />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Payment Information --> */}
                    <div>
                        <h2 className="text-xl font-semibold ">Payment Information</h2>
                        <div className="mt-4">
                            <label htmlFor="card_number" className="block mb-1">
                                Card Number
                            </label>
                            <input
                                type="text"
                                id="card_number"
                                className="w-full rounded-lg border py-2 px-3"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="exp_date" className="blockmb-1">
                                    Expiration Date
                                </label>
                                <input
                                    type="text"
                                    id="exp_date"
                                    className="w-full rounded-lg border py-2 px-3"
                                />
                            </div>
                            <div>
                                <label htmlFor="cvv" className="block mb-1">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    id="cvv"
                                    className="w-full rounded-lg border py-2 px-3 "
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button className="text-white mt-4 font-medium rounded py-2 font-bold bg-[#205b75] md:hover:bg-[#bf8b56] md:hover:text-[#205b75] ">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>    
    );
};

export default Order;