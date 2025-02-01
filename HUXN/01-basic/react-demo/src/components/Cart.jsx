import React from 'react'

function Cart() {
    const items = ["Toothbrush", "Mobile Phone", "Wallet", "Shoes", "Water Bottle"];
    return (
        <>
            <h2>
                Cart
            </h2>
            {items.length > 0 && <p> you have {items.length} items in your cart.</p>}
            <h3>Product list</h3>
            <ol>
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ol>
        </>
    )
}

export default Cart