import React from 'react'

function Product({ name, price }) {
    return (
        <div>
            <h2>
                Product's name ; {name}
            </h2>
            <p>
                Product's price : {price}
            </p>
        </div>
    )
}

export default Product