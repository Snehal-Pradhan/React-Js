import React from 'react'

function ComponentOne({ count, onClickHandler }) {
    const handleClick = () => {
        onClickHandler();
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}

export default ComponentOne