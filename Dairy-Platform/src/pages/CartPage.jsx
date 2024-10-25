import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // retrieve the cart data from localstorage
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const navigate = useNavigate();
    const checkout = () => {
        const requestBody = {
            cart_items: cart
        };
        axios
            .post(
                "http://localhost:3300/api/V1/orders/create",
                requestBody
            )
            .then((response) => {
                const order = response.data
                localStorage.setItem("order", order)
                navigate("/order")
            })
            .catch((error) => {
                console.error(error)
            });
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <Navbar/>
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold">Cart</h1>
                <ul className="list-disc px-4 py-2">
                    {Array.isArray(cart) && cart.length > 0 ? (
                        cart.map((cartItem) => (
                            <li key={cartItem.id}>
                                <h2>{cartItem.productId}</h2>
                                <p>Quantity: ${cartItem.quantity}</p>
                                <p>Price: ${cartItem.price }</p>
                        </li>
                        ))) : (
                            <p>No Carts Available</p>
                    )
                }
                </ul>
                <button onClick={checkout} className="bg-[#205b75] text-white px-4 py-2 rounded md:hover:bg-[#bf8b56] md:hover:text-[#205b75]">
                    Checkout
                </button>
            </div>
            <Footer/>
        </div>
    )
}; 

export default CartPage;