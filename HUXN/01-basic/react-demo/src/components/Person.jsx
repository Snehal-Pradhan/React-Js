import React from 'react'

function Person({ name, age }) {
    return (
        <>
            <h2>Person : {name}</h2>
            <p>
                Age : {age}
            </p>
        </>

    )
}

export default Person