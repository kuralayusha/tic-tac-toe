import { useState, useEffect } from 'react'

import ExitPage from './ExitPage'
import SquareForPvc from './SquareForPvc'
import GameOverPage from './GameOverPage'
import TopBar from '../components/TopBar'
import ScoreBoardForPvc from '../components/ScoreBoardForPvc'

import logo from '../assets/logo.svg'
import reStart from '../assets/icon-restart.svg'
import fullXIcon from '../assets/icon-x-grey.svg'
import fullOIcon from '../assets/icon-o-grey.svg'

function Pvc({
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
  const [cpuIcon, setCpuIcon] = useState('')

  const winner = calculateWinner(squares)
  let status
  let turn

  turn = isTurnOfX ? 'X' : 'O'
  if (winner === 'X') {
    turn = 'X TURN'
  } else if (winner === 'O') {
    turn = 'O TURN'
  }

  useEffect(() => {
    if (playerOneIcon === 'X') {
      setCpuIcon('O')
    } else {
      setCpuIcon('X')
    }
  }, [])

  useEffect(() => {
    if (winner) {
      status = `${winner}`
      setTimeout(() => {
        setShowGameOver(true)
      }, 600)
    } else if (squares.every((square) => square !== '')) {
      status = `ties`
      setTimeout(() => {
        setShowGameOver(true)
      }, 600)
    }

    if (status === 'X') {
      setScoreX(scoreX + 1)
    } else if (status === 'O') {
      setScoreO(scoreO + 1)
    } else if (status === 'ties') {
      setScoreTie(scoreTie + 1)
      return
    }
  }, [squares, winner, isTurnOfX])

  function calculateWinner(squares) {
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

  const renderSquareForPvc = (i) => {
    return (
      <SquareForPvc
        value={squares[i]}
        onClick={() => handleClick(i)}
        isTurnOfX={isTurnOfX}
        playerOneIcon={playerOneIcon}
      />
    )
  }

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return
    } else if (isTurnOfX && playerOneIcon !== 'X') {
      return
    } else if (!isTurnOfX && playerOneIcon !== 'O') {
      return
    }

    squares[i] = isTurnOfX ? 'X' : 'O'
    setSquares(squares)
    setIsTurnOfX(!isTurnOfX)
  }

  useEffect(() => {
    if (winner || squares.every((square) => square !== '')) {
      return
    } else {
      setTimeout(() => {
        if (
          (isTurnOfX && cpuIcon === 'X') ||
          (!isTurnOfX && cpuIcon === 'O')
        ) {
          handleCpuTurn()
          setIsTurnOfX(!isTurnOfX)
        }
      }, 500)
    }
  }, [squares, isTurnOfX, cpuIcon])

  function handleCpuTurn() {
    const emptySquares = squares
      .map((square, index) => (square === '' ? index : null))
      .filter((square) => square !== null)

    const randomSquare =
      emptySquares[Math.floor(Math.random() * emptySquares.length)]

    squares[randomSquare] = cpuIcon
    setSquares(squares)
  }

  return (
    <div className="game--container">
      <TopBar turn={turn} setAskExit={setAskExit} />

      <div className="gameBoard">
        <div className="board--row">
          {renderSquareForPvc(0)}
          {renderSquareForPvc(1)}
          {renderSquareForPvc(2)}
        </div>
        <div className="board--row">
          {renderSquareForPvc(3)}
          {renderSquareForPvc(4)}
          {renderSquareForPvc(5)}
        </div>
        <div className="board--row">
          {renderSquareForPvc(6)}
          {renderSquareForPvc(7)}
          {renderSquareForPvc(8)}
        </div>
      </div>

      <ScoreBoardForPvc
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
            setGameMode={setGameMode}
            setPlayerOneIcon={setPlayerOneIcon}
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
            cpuIcon={cpuIcon}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Pvc
