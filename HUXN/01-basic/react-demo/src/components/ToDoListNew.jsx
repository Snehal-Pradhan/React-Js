import React from 'react'
import { useState } from 'react';

function ToDoListNew() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([])
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim()) {
            setTodos([...todos, input]);
            setInput("");
        }
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='enter todo' value={input} onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
            <ol>
                {todos.map((f, index) => (
                    <li key={index}>{f} , {index}</li>
                ))}
            </ol>
        </div>
    )
}

export default ToDoListNew