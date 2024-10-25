import axios from "axios";
import { useState } from "react";

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const addToCart = async (product) => {
        const requestBody = {
            // product_id: product.id,
            // quantity: 1, // Default quantity, adjust as needed
        };

        try {
            const response = await axios.post("http://localhost:3300/api/V1/carts/create", requestBody);
            console.log("Product added to cart:", response.data);
            const cart = response.data.cart || response.data;
            localStorage.setItem("cart", JSON.stringify(cart))
            alert("Product added to cart successfully");
        } catch (error) {
            if (error.response) {
                // Backend returned an error response
                console.error("Error adding product to cart:", error.response.data.message);
                alert(`Failed to add product: ${error.response.data.message}`);
            } else {
                // Something else went wrong
                console.error("Error adding product to cart:", error.message);
                alert("An unexpected error occurred");
            }
        }
    };

    return (
        <section
            id="products"
            className="product product-section w-4/5 max-w-screen-xl m-auto text-center pt-20"
        >
            <div className="border border-gray-200 p-4 items-center">
                {/* Product Images */}
                <div className="flex justify-center mb-8">
                    <div className="product-images md:w-2/3 h-auto flex justify-center items-center rounded-lg p-4 shadow-2xl">
                        {product.images && product.images.length > 0 ? (
                            product.images.map((image) => (
                                <img key={image.id} src={image.url} alt={product.name} className="product-image center" />
                            ))
                        ) : (
                            <p>No images available</p>
                        )}
                    </div>
                </div>

                {/* Product Info */}
                <h3 className="text-lg font-bold text-center">{product.name}</h3>
                <p className="text-base text-gray-500 text-center">{product.description}</p>
                <p className="text-base text-gray-500 font-bold text-center">Price: Shs.{product.price}</p>

                {/* Quantity Input */}
                <div className="flex items-center justify-center gap-4 my-4">
                    <label htmlFor="quantity" className="text-sm text-gray-500 font-bold">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="border border-gray-200 px-2 py-1 rounded"
                    />
                </div>

                {/* Add to Cart Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-[#205b75] text-white px-4 py-2 md:hover:bg-[#bf8b56] md:hover:text-[#205b75] rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

        </section>
    );
};

export default ProductCard;