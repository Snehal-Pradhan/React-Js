import React from 'react'

function Move() {
    const move = () => {
        alert("alert fired.");
        console.log("alert fired.")
    }
    return (
        <div onMouseMove={move}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque provident reiciendis beatae labore perferendis omnis officia incidunt quae fuga dolorem quia atque, in dolorum accusamus necessitatibus minus ad? Quam, numquam?
        </div>
    )
}

export default Move