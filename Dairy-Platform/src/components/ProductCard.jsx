import { useState } from "react";

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const addToCart = async () => {
        const requestBody = { product_id: product.id, quantity };

        try {
            const response = await axios.post("http://localhost:3300/api/V1/cartitems", requestBody);

            // Handle successful response
            if (response.status === 200 || response.status === 201) {
                console.log("Item added to cart:", response.data);
                // Optionally show a success message or update the UI
                alert("Item added to cart successfully!");
            }
        } catch (error) {
            // Handle errors
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error("Error response:", error.response.data);
                alert(`Failed to add to cart: ${error.response.data.message || 'Unknown error'}`);
            } else if (error.request) {
                // Request was made, but no response was received
                console.error("Error request:", error.request);
                alert("No response from the server. Please try again later.");
            } else {
                // Something else happened in setting up the request
                console.error("Error message:", error.message);
                alert(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div className="border border-gray-200 p-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-sm text-gray-500">Price: ${product.price}</p>
            <div className="flex items-center gap-4">
                <label htmlFor="quantity" className="text-sm text-gray-500">Quantity:</label>
                <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="border border-gray-200 px-2 py-1 rounded" />
            </div>
            <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
    );
};

export default ProductCard;