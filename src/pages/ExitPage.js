function ExitPage({
  setPage,
  setAskExit,
  setIsTurnOfX,
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
    setIsTurnOfX(true)
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
    setPlayerOneIcon('O')
    setGameMode('')
    setIsTurnOfX(true)
    setAskExit(false)
    setScoreX(0)
    setScoreO(0)
    setScoreTie(0)
    setPage('home')
  }

  return (
    <div className="exit--bg">
      <div className="exit--container">
        <p>RESTART GAME?</p>
        <div className="exit--row">
          <button className="hCancle" onClick={handleCancel}>
            NO, CANCEL
          </button>
          <button className="hQuit" onClick={handleQuit}>
            QUIT
          </button>
        </div>
        <div className="exit--row">
          <button className="hMenu" onClick={handleMenu}>
            MAIN MENU
          </button>
          <button className="hRestart" onClick={handleRestart}>
            YES, RESTART
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExitPage
