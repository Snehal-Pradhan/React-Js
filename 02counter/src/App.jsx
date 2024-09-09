import { useState } from 'react'
function App() {
  let [counter,setCounter] =useState(15);
 //let counter = 15;
  const addValue = ()=>{
    if(counter < 20) setCounter(counter+1);
  }
  const removeValue = () => {
    //counter--;
    if(counter > 0)setCounter(counter-1);
  }
  return (
    <>
      <h1>Somu</h1>
      <h2>Counter Value: {counter }</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
