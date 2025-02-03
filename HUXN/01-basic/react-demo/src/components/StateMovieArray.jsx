import React, { useState } from 'react'

function StateMovieArray() {
    const [moviesArray, setMovieArray] = useState([
        { id: 1, title: "Avengers", rating: 7 },
        { id: 2, title: "Inception", rating: 8 }
    ]);
    const updateMovie = () => {
        setMovieArray(moviesArray.map((m) => (m.id === 1 ? { ...moviesArray, title: "Spider-Man" } : m)))

    }
    return (
        <>
            {moviesArray.map((m) => (
                <li key={m.id}>
                    {m.title}
                </li>
            ))}
            <button onClick={updateMovie}>Update</button>
        </>
    )
}

export default StateMovieArray