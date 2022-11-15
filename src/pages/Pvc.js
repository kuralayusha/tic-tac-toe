import { useState, useEffect } from 'react'

import ExitPage from './ExitPage'
import Square from './Square'
import GameOverPage from './GameOverPage'

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
  const [isX, setIsX] = useState(true)
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [scoreTie, setScoreTie] = useState(0)
  const [askExit, setAskExit] = useState(false)
  const [showGameOver, setShowGameOver] = useState(false)
  const [cpuIcon, setCpuIcon] = useState('')

  const winner = calculateWinner(squares)
  let status
  let turn

  turn = isX ? 'X TURN' : 'O TURN'
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
    console.log('in useEffect')
    if (winner) {
      console.log('in useEffect winner')
      status = `${winner}`
      setShowGameOver(true)
    } else if (squares.every((square) => square !== '')) {
      console.log('in useEffect tie')
      status = `ties`
      setShowGameOver(true)
    }

    if (status === 'X') {
      setScoreX(scoreX + 1)
      console.log('X score + 1')
    } else if (status === 'O') {
      setScoreO(scoreO + 1)
      console.log('O score + 1')
    } else if (status === 'ties') {
      setScoreTie(scoreTie + 1)
      console.log('Tie score + 1')
      return
    }
  }, [squares, winner, isX])

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

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)
  }

  useEffect(() => {
    console.log('looking to cpu')
    if (winner || squares.every((square) => square !== '')) {
      console.log('exit game')
      return
    } else {
      console.log("it's cpu turn")
      setTimeout(() => {
        console.log('cpu turn started')
        if ((isX && cpuIcon === 'X') || (!isX && cpuIcon === 'O')) {
          console.log('cpu turn accepted')
          handleCpuTurn()
          setIsX(!isX)
        }
      }, 300)
    }
  }, [squares, isX, cpuIcon])

  function handleCpuTurn() {
    const emptySquares = squares
      .map((square, index) => (square === '' ? index : null))
      .filter((square) => square !== null)

    const randomSquare =
      emptySquares[Math.floor(Math.random() * emptySquares.length)]

    squares[randomSquare] = cpuIcon
    setSquares(squares)
  }

  console.log(cpuIcon)

  return (
    <div>
      {/* TODO: en üstte -icon -sıraKimde -baştan başlama
      orta bölümde 3x3 oyun alanı
    alt bölümde -1.oyuncuSkoru -beraberlik -CPUSkoru*/}
      <div className="topBar">
        {/* icon */}
        {turn}
        <button onClick={exitQuestion}>Baştan Başla</button>
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
          {playerOneIcon === 'X' ? <p>X (YOU)</p> : <p>X (CPU)</p>}
          {scoreX}
        </div>
        <div className="scoreTie">
          <p>TIES</p>
          {scoreTie}
        </div>
        <div className="scoreO">
          {playerOneIcon === 'X' ? <p>O (CPU)</p> : <p>O (YOU)</p>}
          {scoreO}
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
            setIsX={setIsX}
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
