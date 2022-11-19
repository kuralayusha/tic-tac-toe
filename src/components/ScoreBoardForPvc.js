function ScoreBoardForPvc({
  playerOneIcon,
  scoreX,
  scoreO,
  scoreTie,
}) {
  return (
    <div className="scoreBoard">
      <div className="scoreX">
        {playerOneIcon === 'X' ? <p>X (YOU)</p> : <p>X (CPU)</p>}
        <h6>{scoreX}</h6>
      </div>
      <div className="scoreTie">
        <p>TIES</p>
        <h6>{scoreTie}</h6>
      </div>
      <div className="scoreO">
        {playerOneIcon === 'X' ? <p>O (CPU)</p> : <p>O (YOU)</p>}
        <h6>{scoreO}</h6>
      </div>
    </div>
  )
}

export default ScoreBoardForPvc
