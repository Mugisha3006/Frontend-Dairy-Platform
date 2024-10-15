import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("http://localhost:3300/api/V1/products");
            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="flex flex-col gap-4">
            {products.map((product) => (
                <div key={product.id} className="border border-gray-200 p-4">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="text-sm text-gray-500">Price: ${product.price}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;