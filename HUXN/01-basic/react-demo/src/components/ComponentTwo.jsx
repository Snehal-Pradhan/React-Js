import React from 'react'

function ComponentTwo({ count, onClickHandler }) {
    const handleClick = () => {
        onClickHandler();
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>decrement</button>
        </div>
    )
}

export default ComponentTwo