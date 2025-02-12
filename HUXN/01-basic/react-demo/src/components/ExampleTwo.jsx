import React, { useState } from 'react'

function ExampleTwo() {
    const [randomNumber, setRandomNumber] = useState(() => {
        return Math.floor(Math.random() * 100)
    })
    const generateNewRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 100);
        setRandomNumber(newNumber)
    }
    return (
        <div>
            <h1>
                Random Number : {randomNumber}
            </h1>
            <button onClick={generateNewRandomNumber}>Generate new Random number</button>
        </div>
    )
}

export default ExampleTwo