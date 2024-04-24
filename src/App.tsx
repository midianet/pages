import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col bg-pink-600 w-full h-96">
          <span>Teste {count}</span>
          <span>Outro nome</span>
      </div>
    </>
  )
}

export default App
