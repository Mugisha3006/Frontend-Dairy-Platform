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
        <section
            id="products"
            className="product product-section w-4/5 max-w-screen-xl m-auto text-center pt-20"
        >
            <div className="border border-gray-200 p-4">
                <div className="product-images md:w-1/2 h-auto flex justify-center items-center rounded-lg p-4 shadow-2xl w-full mb-8">
                    {product.images && product.images.length > 0 ? (
                        product.images.map((image) => (
                            <img key={image.id} src={image.url} alt={product.name} className="product-image" />
                        ))
                    ) : (
                        <p>No images available</p>
                    )}
                </div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-base text-gray-500">{product.description}</p>
                <p className="text-base text-gray-500">Price: Shs.{product.price}</p>
                <div className="flex items-center gap-4">
                    <label htmlFor="quantity" className="text-sm text-gray-500">Quantity:</label>
                    <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="border border-gray-200 px-2 py-1 rounded" />
                </div>
                <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
        </section>
    );
};

export default ProductCard;