function ScoreBoardForPvp({
  playerOneIcon,
  scoreX,
  scoreO,
  scoreTie,
}) {
  return (
    <div className="scoreBoard">
      <div className="scoreX">
        {playerOneIcon === 'X' ? <p>X (P1)</p> : <p>X (P2)</p>}
        <h6>{scoreX}</h6>
      </div>
      <div className="scoreTie">
        <p>TIES</p>
        <h6>{scoreTie}</h6>
      </div>
      <div className="scoreO">
        {playerOneIcon === 'X' ? <p>O (P2)</p> : <p>O (P1)</p>}
        <h6>{scoreO}</h6>
      </div>
    </div>
  )
}

export default ScoreBoardForPvp
