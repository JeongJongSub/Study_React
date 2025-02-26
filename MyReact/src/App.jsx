import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FavoriteColor from './assets/study_react/FavoriteColor'
import MyCar from './assets/study_react/MyCar'
import Timer from './assets/study_react/Timer'
import MyCar2 from './assets/study_react/MyCar2'

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <hr />
      <h1>Study React</h1>
      <h2>상태(State)</h2>
      <FavoriteColor/>
      <hr />
      <h1>HOOK</h1>
      <h2>hook study1</h2>
      <MyCar/>
      <MyCar2/>
      <hr />
      <h2>hook study2</h2>
      <Timer/>






    </>
  )
}

export default App
