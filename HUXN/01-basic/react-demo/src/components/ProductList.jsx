import React from 'react'

function ProductList() {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
    ]
    return (
        <div>
            {products.map(({ id, name, price }) => (
                <div key={id}>
                    {name}   -   {price}
                </div>
            ))}
        </div>
        /*
         <div>{users.map(({ id, name, age }) => (
            <h3>{name}  -  {age}</h3>
        ))}</div>
        */
    )
}

export default ProductList