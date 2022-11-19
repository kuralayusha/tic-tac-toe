import GameOver from '../components/GameOver'

import fullXIcon from '../assets/icon-x.svg'
import fullOIcon from '../assets/icon-o.svg'

function GameOverPage({
  setIsTurnOfX,
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
    <GameOver
      setIsTurnOfX={setIsTurnOfX}
      setPage={setPage}
      setScoreX={setScoreX}
      setScoreO={setScoreO}
      setSquares={setSquares}
      setScoreTie={setScoreTie}
      setGameMode={setGameMode}
      setShowGameOver={setShowGameOver}
      winner={winner}
      setPlayerOneIcon={setPlayerOneIcon}
      message={message}
      title={title}
    />
  )
}

export default GameOverPage
