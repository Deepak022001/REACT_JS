import React from "react";

const products = [
    { id: 1, name: "T-Shirt", price: "₹499" },
    { id: 2, name: "Jeans", price: "₹999" },
    { id: 3, name: "Shoes", price: "₹1999" }
];

const ProductList = () => {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
