import React, { useEffect, useState } from 'react'

function CounterEffect() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = 'increment '+ count; 
    },[count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default CounterEffect