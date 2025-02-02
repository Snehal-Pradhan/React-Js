import React from 'react'

function Button() {
    const handleClick = () => {
        console.log((Math.round(Math.random() * 10)));
    }
    return (
        <div><button onClick={() => (handleClick())}>Click</button></div >
    )
}

export default Button