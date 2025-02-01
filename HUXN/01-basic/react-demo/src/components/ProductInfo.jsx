import React from 'react'

function ProductInfo() {
    const product = {
        name: "Laptop",
        price: 1200,
        availability: "In Stock"
    }
    return (
        <div>
            <h2>name : {product.name}</h2>
            <h2>price : {product.price}</h2>
            <h2>availability : {product.availability}</h2>
        </div>
    )
}

export default ProductInfo