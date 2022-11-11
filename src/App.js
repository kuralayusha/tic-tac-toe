import { useState } from 'react'

import Pvp from './pages/Pvp'
import Pvc from './pages/Pvc'
import HomePage from './pages/HomePage'
import React from 'react'
import ExitPage from './pages/ExitPage'

function App() {
  const [page, setPage] = useState('home')
  const [playerOneIcon, setPlayerOneIcon] = useState('')

  return (
    <div className="App">
      {page === 'home' && (
        <HomePage
          setPage={setPage}
          setPlayerOneIcon={setPlayerOneIcon}
          playerOneIcon={playerOneIcon}
        />
      )}
      {page === 'pvp' && (
        <Pvp setPage={setPage} playerOneIcon={playerOneIcon} />
      )}
      {page === 'pvc' && (
        <Pvc setPage={setPage} playerOneIcon={playerOneIcon} />
      )}
    </div>
  )
}

export default App
