import { useState } from 'react'

import Pvp from './pages/Pvp'
import Pvc from './pages/Pvc'
import HomePage from './pages/HomePage'
import React from 'react'
import ExitPage from './pages/ExitPage'

function App() {
  // state for wich page to render
  const [page, setPage] = useState('home')
  const [playerOneIcon, setPlayerOneIcon] = useState('O')
  const [gameMode, setGameMode] = useState('')

  return (
    <div className="App">
      {page === 'home' && (
        <HomePage
          playerOneIcon={playerOneIcon}
          setPage={setPage}
          setGameMode={setGameMode}
          setPlayerOneIcon={setPlayerOneIcon}
        />
      )}
      {page === 'pvp' && (
        <Pvp
          playerOneIcon={playerOneIcon}
          gameMode={gameMode}
          setPage={setPage}
          setGameMode={setGameMode}
          setPlayerOneIcon={setPlayerOneIcon}
        />
      )}
      {page === 'pvc' && (
        <Pvc
          playerOneIcon={playerOneIcon}
          gameMode={gameMode}
          setPage={setPage}
          setGameMode={setGameMode}
          setPlayerOneIcon={setPlayerOneIcon}
        />
      )}
    </div>
  )
}

export default App
