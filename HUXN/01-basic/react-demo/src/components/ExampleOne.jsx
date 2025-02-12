import React, { useState } from 'react'

function ExampleOne() {
    const [count, setCount] = useState(() => {
        const intialCount = 10
        return intialCount;


    });
    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={handleClick}>increment</button>
        </div>
    )
}

export default ExampleOne