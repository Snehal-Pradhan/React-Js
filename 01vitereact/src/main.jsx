import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)

function MyApp(){
  return(
    <div>
      <h1>Custom App! || somu</h1>
    </div>
  )
}