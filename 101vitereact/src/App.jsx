import { useState } from 'react'
import Name from './Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello World by Vite</h1>
    <Name></Name>
    </>
  )
}

export default App
