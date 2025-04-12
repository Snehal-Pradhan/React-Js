import ComponentA from "./components/ComponentA";
import { createContext } from "react";
import ComponentC from "./components/ComponentC";
import UserProfile from "./components/UserProfile";

export const Data = createContext(null)
export const Data1 = createContext(null)

function App() {
  const name = 'somu'
  const age = 19;

  return (
    <>
      <UserProfile />

    </>
  )
}

export default App
