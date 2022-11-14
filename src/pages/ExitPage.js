function ExitPage({
  setPage,
  setAskExit,
  setIsX,
  setSquares,
  setScoreX,
  setScoreO,
  setScoreTie,
  setGameMode,
  setPlayerOneIcon,
}) {
  function handleCancel() {
    setAskExit(false)
  }

  function handleRestart() {
    setSquares(['', '', '', '', '', '', '', '', ''])
    setIsX(true)
    setScoreX(0)
    setScoreO(0)
    setScoreTie(0)
    setAskExit(false)
  }

  function handleQuit() {
    window.location.href = 'https://github.com/kuralayusha'
  }

  function handleMenu() {
    setSquares(['', '', '', '', '', '', '', '', ''])
    setPlayerOneIcon('X')
    setGameMode('')
    setIsX(true)
    setAskExit(false)
    setScoreX(0)
    setScoreO(0)
    setScoreTie(0)
    setPage('home')
  }

  return (
    <div>
      <button onClick={handleCancel}>NO, CANCEL</button>
      <button onClick={handleRestart}>Yes, RESTART</button>
      <button onClick={handleMenu}>MAIN MENU</button>
      <button onClick={handleQuit}>QUIT</button>
    </div>
  )
}

export default ExitPage
