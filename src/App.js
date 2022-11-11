import { useState } from 'react'

import Pvp from './pages/Pvp'
import Pvc from './pages/Pvc'
import HomePage from './pages/HomePage'
import React from 'react'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="App">
      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'pvp' && <Pvp setPage={setPage} />}
      {page === 'pvc' && <Pvc setPage={setPage} />}
    </div>
  )
}

export default App
