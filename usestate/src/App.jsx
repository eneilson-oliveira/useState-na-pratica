

import './App.css'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [valueInput, setValueInput] = useState('eneilson')
   const add = () => {
    setCount(count + 1)
   }
   const onChangeInput = (event) => {
    setValueInput(event.target.value)
   }

  return (
    <div className="App">
    <h1>Aprendendo a usar o useState</h1>
    <h2>{count}</h2>
    <button onClick={add}>Adicionar</button>
    <div>
      <input onChange={onChangeInput}></input>
    </div>
    <h2>{valueInput}</h2>
    </div>
  )
}

export default App
