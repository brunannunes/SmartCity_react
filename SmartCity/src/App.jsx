import { useState } from 'react'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
import {Rotas} from './Rotas/Rotas'


function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
  )
}

export default App
