function GameOverPage({
  setIsX,
  setPage,
  setScoreX,
  setScoreO,
  setSquares,
  setScoreTie,
  setGameMode,
  setShowGameOver,
  winner,
  gameMode,
  playerOneIcon,
  setPlayerOneIcon,
  cpuIcon,
}) {
  let message = ''
  let title = ''

  function handleNextRound() {
    setSquares(['', '', '', '', '', '', '', '', ''])
    setShowGameOver(false)
    setIsX(true)
  }

  function handleMainMenu() {
    setSquares(['', '', '', '', '', '', '', '', ''])
    setPlayerOneIcon('X')
    setGameMode('')
    setIsX(true)
    setScoreX(0)
    setScoreO(0)
    setScoreTie(0)
    setPage('home')
    setShowGameOver(false)
  }

  function handleQuit() {
    window.location.href = 'https://github.com/kuralayusha'
  }

  if (gameMode === 'pvp') {
    if (playerOneIcon === 'X') {
      if (winner === 'X') {
        message = 'PLAYER 1 WINS'
        title = 'TAKES THE ROUND'
      } else if (winner === 'O') {
        message = 'PLAYER 2 WINS'
        title = 'TAKES THE ROUND'
      } else {
        message = ''
        title = 'ROUND TIED'
      }
    } else {
      if (winner === 'X') {
        message = 'PLAYER 2 WINS'
        title = 'TAKES THE ROUND'
      } else if (winner === 'O') {
        message = 'PLAYER 1 WINS'
        title = 'TAKES THE ROUND'
      } else {
        message = ''
        title = 'ROUND TIED'
      }
    }
  } else if (gameMode === 'pvc') {
    if (cpuIcon === 'O') {
      if (winner === 'X') {
        message = 'YOU WON'
        title = 'TAKES THE ROUND'
      } else if (winner === 'O') {
        message = 'OH NO, YOU LOST...'
        title = 'TAKES THE ROUND'
      } else {
        message = ''
        title = 'ROUND TIED'
      }
    } else {
      if (winner === 'X') {
        message = 'OH NO, YOU LOST...'
        title = 'TAKES THE ROUND'
      } else if (winner === 'O') {
        message = 'YOU WON'
        title = 'TAKES THE ROUND'
      } else {
        message = ''
        title = 'ROUND TIED'
      }
    }
  }

  return (
    <div>
      <p>{`${message}`}</p>
      {winner === 'X' ? ( // if winner is X, show player 1 icon
        <img src="#" alt="X" />
      ) : winner === 'O' ? ( // if winner is O, show player 2 icon
        <img src="#" alt="O" />
      ) : null}{' '}
      {`${title}`}
      <div>
        <button onClick={handleQuit}>QUIT</button>
        <button onClick={handleMainMenu}>MAIN MENU</button>
        <button onClick={handleNextRound}>NEXT ROUND</button>
      </div>
    </div>
  )
}

export default GameOverPage
