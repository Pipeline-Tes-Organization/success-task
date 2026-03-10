import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lorem from './lorem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ini Vite + React Testing Success</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 100)}>
          count is {count} Updated again
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint nihil, magnam rem blanditiis, atque vero doloremque nisi doloribus, minima quam. Ab sit, ex accusantium aut rerum possimus consectetur laudantium?
      </p>
      <Lorem/>
    </>
  )
}

export default App
