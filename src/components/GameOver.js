import fullXIcon from '../assets/icon-x.svg'
import fullOIcon from '../assets/icon-o.svg'

function GameOver({
  setIsTurnOfX,
  setPage,
  setScoreX,
  setScoreO,
  setSquares,
  setScoreTie,
  setGameMode,
  setShowGameOver,
  winner,
  setPlayerOneIcon,
  message,
  title,
}) {
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

export default GameOver
