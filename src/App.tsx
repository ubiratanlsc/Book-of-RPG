import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Components from './components/Char'
import { Index } from './components/Index'
import Char from './components/Char'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/chars" element={<Char />}/>
      </Routes>
    </Router>
  )
}

export default App
