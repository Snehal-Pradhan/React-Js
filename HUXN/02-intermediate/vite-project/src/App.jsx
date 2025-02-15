import ComponentA from "./components/ComponentA";
import { createContext } from "react";
import ComponentC from "./components/ComponentC";

export const Data = createContext(null)
export const Data1 = createContext(null)

function App() {
  const name = 'somu'
  const age = 19;

  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>

    </>
  )
}

export default App
