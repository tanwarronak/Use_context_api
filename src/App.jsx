import './App.css'
import Data from './components/Data'
import CountContext from './contexts/Count'
// import CountRun from './contexts/Countstore'
import { useState } from 'react'


function App() {
    const [count, setCount] = useState(0)

  return (
     <> <CountContext.Provider value={{count,setCount}}>
      <div>
        <h1>RAM RAM</h1>
      </div>
      <Data></Data>
      </CountContext.Provider>
    </>
  )
}

export default App
