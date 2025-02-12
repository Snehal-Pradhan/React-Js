import React, { useState, useEffect } from 'react';

function ExampleThree() {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem('name');
        return savedName ? JSON.parse(savedName) : "";
    })
    const handleChange = (event) => { setName(event.target.value); }
    const clearName = () => { setName(""); }
    useEffect(() => { localStorage.setItem('name', JSON.stringify(name)) }, [name])
    return (
        <div>
            <h1>Your Name : {name}</h1>
            <input type='text' value={name} onChange={handleChange} placeholder='Enter your name' />
            <button onClick={clearName}>Clear Name</button>
        </div>
    )
}

export default ExampleThree