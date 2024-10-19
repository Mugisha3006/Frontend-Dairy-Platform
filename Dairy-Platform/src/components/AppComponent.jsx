import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function AppComponent() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 gap-4">
                <ProductList />
                <Cart />
            </div>
        </div>
    );
}; 

export default AppComponent;