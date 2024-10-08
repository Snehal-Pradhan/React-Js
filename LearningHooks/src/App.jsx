import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter,setCounter] = useState(10)
  function addValue(){
  // console.log("added")
  //counter++;
  //counter++;
  if(counter <20){
    setCounter(counter+1);
  }
  }
  function removeValue(){
    if(counter >0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1>Snehal Pradhan</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>↑ {counter}</button>
      <br/>
      <button onClick={removeValue}>↓ {counter}</button>

    </>
  )
}

export default App
