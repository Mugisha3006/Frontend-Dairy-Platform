import { useState } from "react";
import axios from "axios";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Fetch cart items from the API when the component mounts
    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get("http://localhost:3300/api/V1/cartitems");
            setCartItems(response.data);  // Assuming the response contains an array of cart items
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

    return (
        <div className="border border-gray-200 p-4">
            <h3 className="text-lg font-bold">Cart</h3>
            <div className="flex flex-col gap-4">
                {cartItems.map((cartItem) => (
                    <div key={cartItem.id} className="flex justify-between">
                        <p className="text-sm text-gray-500">{cartItem.product.name}</p>
                        <p className="text-sm text-gray-500">Quantity: {cartItem.quantity}</p>
                        <button onClick={() => removeFromCart(cartItem)} className="text-red-500 hover:text-red-700">Remove</button>
                    </div>
                ))}
            </div>
            <button onClick={() => checkout()} className="bg-green-500 text-white px-4 py-2 rounded">Checkout</button>
        </div>
    );
};

export default Cart;