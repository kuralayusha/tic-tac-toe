import { useEffect, useState } from 'react'
import Square from '../components/SquareForPvp'
import ExitPage from './ExitPage'
import GameOverPage from './GameOverPage'
import TopBar from '../components/TopBar'
import ScoreBoardForPvp from '../components/ScoreBoardForPvp'

import logo from '../assets/logo.svg'
import reStart from '../assets/icon-restart.svg'
import fullXIcon from '../assets/icon-x-grey.svg'
import fullOIcon from '../assets/icon-o-grey.svg'
import SquareForPvp from '../components/SquareForPvp'

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
  const [isTurnOfX, setIsTurnOfX] = useState(true)
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [scoreTie, setScoreTie] = useState(0)
  const [askExit, setAskExit] = useState(false)
  const [showGameOver, setShowGameOver] = useState(false)

  const winner = calculateWinner(squares)
  let status
  let turn

  turn = isTurnOfX ? 'X' : 'O'
  if (winner === 'X') {
    turn = 'X TURN'
  } else if (winner === 'O') {
    turn = 'O TURN'
  }

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = isTurnOfX ? 'X' : 'O'
    setSquares(squares)
    setIsTurnOfX(!isTurnOfX)
  }

  useEffect(() => {
    if (winner) {
      status = `${winner}`
      setTimeout(() => {
        setShowGameOver(true)
      }, 300)
    } else if (squares.every((square) => square !== '')) {
      status = `ties`
      setTimeout(() => {
        setShowGameOver(true)
      }, 300)
    }

    if (status === 'ties') {
      setScoreTie(scoreTie + 1)
    } else if (status === 'O') {
      setScoreO(scoreO + 1)
    } else if (status === 'X') {
      setScoreX(scoreX + 1)
    }
  }, [squares, isTurnOfX, winner])

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
      <SquareForPvp
        value={squares[i]}
        onClick={() => handleClick(i)}
        isTurnOfX={isTurnOfX}
      />
    )
  }
  return (
    <div className="game--container">
      <TopBar turn={turn} setAskExit={setAskExit} />

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

      <ScoreBoardForPvp
        playerOneIcon={playerOneIcon}
        scoreX={scoreX}
        scoreO={scoreO}
        scoreTie={scoreTie}
      />
      <div>
        {askExit && (
          <ExitPage
            setPage={setPage}
            setSquares={setSquares}
            setIsTurnOfX={setIsTurnOfX}
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
            setIsTurnOfX={setIsTurnOfX}
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
