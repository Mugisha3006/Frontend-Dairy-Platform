import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

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
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default ProductList;