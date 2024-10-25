import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("http://localhost:3300/api/V1/products/allProducts");
            console.log(response.data)
            setProducts(response.data.products || []);
        };

        fetchProducts();
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-center mb-6 font-bold">Products</h1>
            {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default ProductList;