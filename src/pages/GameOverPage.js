function GameOverPage({
  setPage,
  setAskExit,
  setIsX,
  setSquares,
  setScoreX,
  setScoreO,
  setScoreTie,
  winner,
  setShowGameOver,
}) {
  let message = ''
  if (winner === 'X') {
    message = 'PLAYER 1 WINS'
  } else if (winner === 'O') {
    message = 'PLAYER 2 WINS'
  } else {
    message = 'ROUND TIED'
  }

  function handleNextRound() {
    setSquares(['', '', '', '', '', '', '', '', ''])
    setShowGameOver(false)
    setIsX(true)
  }

  function handleMainMenu() {
    setSquares(['', '', '', '', '', '', '', '', ''])
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

  return (
    <div>
      <p>{`${message}`}</p>
      {winner === 'X' ? ( // if winner is X, show player 1 icon
        <img src="#" alt="player1" />
      ) : winner === 'O' ? ( // if winner is O, show player 2 icon
        <img src="#" alt="player2" />
      ) : null}{' '}
      <h1>TAKES THE ROUND</h1>
      <div>
        <button onClick={handleQuit}>QUIT</button>
        <button onClick={handleMainMenu}>MAIN MENU</button>
        <button onClick={handleNextRound}>NEXT ROUND</button>
      </div>
    </div>
  )
}

export default GameOverPage
