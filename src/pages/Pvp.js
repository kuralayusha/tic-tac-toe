import { useEffect, useState } from 'react'
import Square from './Square'
import ExitPage from './ExitPage'
import GameOverPage from './GameOverPage'

import logo from '../assets/logo.svg'
import reStart from '../assets/icon-restart.svg'

function Pvp({
  playerOneIcon,
  setPage,
  gameMode,
  setGameMode,
  setPlayerOneIcon,
}) {
  const [squares, setSquares] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ])
  const [isX, setIsX] = useState(true)
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [scoreTie, setScoreTie] = useState(0)
  const [askExit, setAskExit] = useState(false)
  const [showGameOver, setShowGameOver] = useState(false)

  const winner = calculateWinner(squares)
  let status
  let turn

  turn = isX ? 'X TURN' : 'O TURN'
  if (winner === 'X') {
    turn = 'X TURN'
  } else if (winner === 'O') {
    turn = 'O TURN'
  }

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)
  }

  useEffect(() => {
    if (winner) {
      status = `${winner}`
      setShowGameOver(true)
    } else if (squares.every((square) => square !== '')) {
      status = `ties`
      setShowGameOver(true)
    }

    if (status === 'ties') {
      setScoreTie(scoreTie + 1)
    } else if (status === 'O') {
      setScoreO(scoreO + 1)
    } else if (status === 'X') {
      setScoreX(scoreX + 1)
    }
  }, [squares, isX, winner])

  function calculateWinner(squares) {
    // console.log('winner bulmayı denedim')
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i]

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  function exitQuestion() {
    setAskExit(true)
  }

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClick={() => handleClick(i)} />
    )
  }
  return (
    <div className="game--container">
      <div className="topBar">
        <img src={logo} />
        <p>{turn}</p>
        <button onClick={exitQuestion}>
          <img src={reStart} />
        </button>
      </div>

      <div className="gameBoard">
        <div className="board--row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board--row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board--row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

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
      <div>
        {askExit && (
          <ExitPage
            setPage={setPage}
            setSquares={setSquares}
            setIsX={setIsX}
            setAskExit={setAskExit}
            setScoreX={setScoreX}
            setScoreO={setScoreO}
            setScoreTie={setScoreTie}
            setPlayerOneIcon={setPlayerOneIcon}
            setGameMode={setGameMode}
          />
        )}
      </div>
      <div>
        {showGameOver ? (
          <GameOverPage
            winner={winner}
            gameMode={gameMode}
            setPage={setPage}
            setIsX={setIsX}
            setSquares={setSquares}
            setShowGameOver={setShowGameOver}
            setScoreX={setScoreX}
            setScoreO={setScoreO}
            setScoreTie={setScoreTie}
            setGameMode={setGameMode}
            setPlayerOneIcon={setPlayerOneIcon}
            playerOneIcon={playerOneIcon}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Pvp
