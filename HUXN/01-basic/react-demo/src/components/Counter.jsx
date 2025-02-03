import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            <div>{count}</div>
        </div>
    )
}

export default Counter