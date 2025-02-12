import React, { useState } from 'react'

function ShoppingList() {
    const [cart, setCart] = useState([]);
    const [inputItem, setInputItem] = useState({ itemName: "", quantity: 0 })
    const handleChange = (e) => {
        setInputItem({ ...inputItem, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCart([...cart, inputItem])
        setInputItem({ itemName: "", quantity: "" })
    }
    const handleIncrement = () => {
        setInputItem((prev) => ({ ...prev, quantity: Number(prev.quantity) + 1 }))
    }
    const handleDecrement = () => {
        setInputItem((prev) => ({ ...prev, quantity: Number(prev.quantity) - 1 }))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='enter item' required name="itemName" value={inputItem.itemName} onChange={handleChange} />
                <input type='number' placeholder='enter quantity' required value={inputItem.quantity} name="quantity" onChange={handleChange} />
                <button type='button' onClick={handleIncrement}>+</button>
                <button type='button' onClick={handleDecrement}>-</button>
                <button type='submit'>Add</button>
            </form>
            <div>
                <ol>
                    {cart.map((f, index) => (
                        <li key={index}>{f.itemName} - {f.quantity}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default ShoppingList