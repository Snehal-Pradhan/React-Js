import React from 'react'

function Props() {
    return (
        <User name="somu" age={19} isMarried={false} hobbies={['Reading', 'Coding', 'Sleeping']} />
    )
}

export default Props


function User({ name, age, isMarried, hobbies }) {
    return (
        <>
            <div>name : {name}</div>
            <div>age : {age}</div>
            <div>isMarried : {isMarried}</div>
            <div>Hobbies : {hobbies}</div>
        </>
        // learning further how to add boolean
    )
}

