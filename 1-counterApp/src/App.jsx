import { useState } from "react"
import "./App.css"

export default function App(){
  const [counter,setCounter] = useState(0) 
  return <div className="container">
  <h1 className="counter">{counter}</h1>
  <div className="buttons">
  <button onClick={()=>setCounter(counter+1)}>+</button>
  <button onClick={()=>setCounter(counter-1)}>-</button>
  <button onClick={()=> setCounter(0)}>reset</button>
  </div>
  </div>
}