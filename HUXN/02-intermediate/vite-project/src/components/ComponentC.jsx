import React from 'react'
import { useContext } from 'react'
import { Data, Data1 } from '../App'

function ComponentC() {
    const userName = userContext(Data)
    const userAge = userContext(Data1)

    return (
        <h1>My name is : {userName} and i'm {userAge} years old</h1>
    )
}

export default ComponentC