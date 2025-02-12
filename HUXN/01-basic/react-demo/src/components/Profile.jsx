import React, { useState } from 'react'

function Profile() {
    const [profile, setProfile] = useState({ name: "", age: "" })
    const [inputValue, setInputValue] = useState({ name: "", age: "" })
    const handleChange = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setProfile(inputValue);
        setInputValue({ name: "", age: "" });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='enter name' name='name' value={inputValue.name} required onChange={handleChange} />
                <input type='number' placeholder='enter age' name='age' value={inputValue.age} required onChange={handleChange} />
                <button type='submit'>Enter</button>
            </form>
            <div>
                <h1>{profile.name}</h1>
                <p>{profile.age}</p>
            </div>
        </div>
    )
}

export default Profile