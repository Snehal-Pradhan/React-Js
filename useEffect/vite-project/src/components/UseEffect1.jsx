import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const[value,setValue] = useState(0);
    useEffect(()=>{
        console.log(value)
    },[value])


  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=> setValue(value+1)}>increment</button>
    </div>
  )
}

export default UseEffect1