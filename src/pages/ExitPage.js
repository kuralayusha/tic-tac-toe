import Exit from '../components/Exit'

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
  return (
    <Exit
      setPage={setPage}
      setAskExit={setAskExit}
      setIsTurnOfX={setIsTurnOfX}
      setSquares={setSquares}
      setScoreX={setScoreX}
      setScoreO={setScoreO}
      setScoreTie={setScoreTie}
      setGameMode={setGameMode}
      setPlayerOneIcon={setPlayerOneIcon}
    />
  )
}

export default ExitPage
