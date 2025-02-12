import React from 'react'
import { useState } from 'react';

function CounterNew() {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => setCounter(counter + 1);
    const handleDecrement = () => setCounter(counter - 1);

    return (
        <div>
            <h1>
                Counter : {counter}
            </h1>

            <button onClick={handleIncrement}> + </button>
            <button onClick={handleDecrement}> - </button>
        </div>
    )
}

export default CounterNew