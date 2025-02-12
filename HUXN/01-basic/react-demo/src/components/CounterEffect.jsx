import React, { useEffect, useState } from 'react'

function CounterEffect() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        document.title = `increment ${counter}`
    }, [counter])
    return (
        <div>CounterEffect
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
}

export default CounterEffect