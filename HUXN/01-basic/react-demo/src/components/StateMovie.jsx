import React, { useState } from 'react';

function StateMovie() {
    const [movie, setMovie] = useState({
        title: "Avengers",
        rating: 7,
    })
    const addOneToRating = () => {
        setMovie({ ...movie, rating: movie.rating + 1 })
    }
    return (
        <>
            <h1>{movie.title}</h1>
            <p>Ratings : {movie.rating}</p>
            <button onClick={addOneToRating}>+1</button>
        </>
    )
}

export default StateMovie