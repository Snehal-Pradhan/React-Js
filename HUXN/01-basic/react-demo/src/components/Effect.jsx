import React from 'react'
import { useState, useEffect } from 'react'

function Effect() {
    const [value, setValue] = useState(0);
    const [something, setSomething] = useState(0);

    useEffect(() => {
        if (value > 0) {
            console.log('call use effect');
            document.title = `Increment ${value}`
        }
    }, [value, something])



    return (
        <div>
            <h2>
                {value}
            </h2>
            <button onClick={() => setValue(value + 1)}>Increment</button>
            <button onClick={() => setSomething(value + 1)}>Increment By Something</button>
        </div>
    )
}

export default Effect