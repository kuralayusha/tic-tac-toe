import fullXIcon from '../assets/icon-x.svg'
import emptyXIcon from '../assets/icon-x-outline.svg'
import fullOIcon from '../assets/icon-o.svg'
import emptyOIcon from '../assets/icon-o-outline.svg'

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

  function handleNextRound() {
    setSquares(['', '', '', '', '', '', '', '', ''])
    setShowGameOver(false)
    setIsTurnOfX(true)
  }

  function handleMainMenu() {
    setSquares(['', '', '', '', '', '', '', '', ''])
    setPlayerOneIcon('O')
    setGameMode('')
    setIsTurnOfX(true)
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
    <div className="game--over--bg">
      <div className="game--over--container">
        <p className="message">{`${message}`}</p>
        {winner === 'X' ? ( // if winner is X, show player 1 icon
          <p className="title blue">
            <img src={fullXIcon} alt="X" />
            {title}
          </p>
        ) : winner === 'O' ? ( // if winner is O, show player 2 icon
          <p className="title yellow">
            <img src={fullOIcon} alt="O" />
            {title}
          </p>
        ) : !winner ? (
          <p className="title">{title}</p>
        ) : null}{' '}
        <div className="game--over--options">
          <button className="handleMainMenu" onClick={handleMainMenu}>
            MAIN MENU
          </button>
          <button className="handleQuit" onClick={handleQuit}>
            QUIT
          </button>
          <button className="handleNRound" onClick={handleNextRound}>
            NEXT ROUND
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOverPage
