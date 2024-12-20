import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // retrieve the cart data from localstorage
        const savedCart = localStorage.getItem("cart");
        console.log(savedCart)
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Fetch cart items from the API when the component mounts
    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get("http://localhost:3300/api/V1/cartitems/allCartItems");
            setCartItems(response.data.cartItems || []);  
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    const addToCart = async (product) => {
        const requestBody = { product_id: product.id, quantity: product.quantity };  // You can customize the quantity as needed

        try {
            const response = await axios.post("http://localhost:3300/api/V1/cartItems/create", requestBody);
            if (response.status === 201 || response.status === 200) {
                console.log("Product added:", response.data);
                // Optionally, update the cart items in the state
                setCartItems([...cartItems, response.data]);
                alert("Product added to cart successfully!");
            }
        } catch (error) {
            console.error("Error adding product to cart:", error);
            alert("Failed to add product to cart.");
        }
    };

    const removeFromCart = async (cartItem) => {
        try {
            const response = await axios.delete(`http://localhost:3300/api/V1/cartItems/${cartItem.id}/deleteCartItem`);
            if (response.status === 200 || response.status === 204) {
                console.log("Item removed from cart:", cartItem.id);
                // Update cart items by removing the item
                setCartItems(cartItems.filter(item => item.id !== cartItem.id));
                alert("Item removed from cart.");
            }
        } catch (error) {
            console.error("Error removing item from cart:", error);
            alert("Failed to remove item from cart.");
        }
    };

    const navigate = useNavigate();
    const checkout = () => {
        const requestBody = {
            cart_items: cartItems.id //undefined
        };
        console.log(requestBody)
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
            <h1 className="text-2xl font-bold text-center">Cart</h1>
            <div className="flex flex-col gap-4  px-4 py-8">
                {cartItems.map((cartItem) => (
                    <div key={cartItem.id} className="flex justify-between">
                        <p className="text-sm text-gray-500">{cartItem.product}</p>
                        <p className="text-sm text-gray-500">Quantity: {cartItem.quantity}</p>
                        <button onClick={() => removeFromCart(cartItem)} className="text-red-500 hover:text-red-700">Remove</button>
                    </div>
                ))}
            </div>
            <button onClick={checkout} className="bg-green-500 text-white px-4 py-2 rounded">Checkout</button>
        </div>
    );
};

export default Cart;