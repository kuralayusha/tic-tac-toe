import { useEffect, useState } from 'react'
import Square from './Square'
import ExitPage from './ExitPage'

function Pvp({ playerOneIcon, setPage }) {
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

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)
  }

  const winner = calculateWinner(squares)
  let status

  if (winner) {
    status = `Winner: ${winner}`
    console.log('winner')
  } else if (squares.every((square) => square !== '')) {
    status = `ties`
  } else {
    status = `${isX ? 'X' : 'O'} Turn`
  }

  useEffect(() => {
    if (status === 'ties') {
      setScoreTie(scoreTie + 1)
    } else if (status === 'Winner: O') {
      setScoreO(scoreO + 1)
    } else if (status === 'Winner: X') {
      setScoreX(scoreX + 1)
    }
  }, [status])

  console.log(scoreX, scoreTie, scoreO)

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

  function exitQuestion() {
    setAskExit(true)
  }

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClick={() => handleClick(i)} />
    )
  }

  return (
    <div>
      {/* TODO: en üstte -icon -sıraKimde -baştanBaşlama
      orta bölümde 3x3 oyun alanı
      alt bölümde -1.oyuncuSkoru -beraberlikSkoru -2.oyuncuSkoru*/}
      <div className="topBar">
        {/* icon */}
        {status}
        {/* baştan başlama */}
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
        <div className="scoreX">{scoreX}</div>
        <div className="scoreTie">{scoreTie}</div>
        <div className="scoreO">{scoreO}</div>
      </div>
      {askExit && (
        <ExitPage
          setPage={setPage}
          setSquares={setSquares}
          setIsX={setIsX}
          setAskExit={setAskExit}
          setScoreX={setScoreX}
          setScoreO={setScoreO}
          setScoreTie={setScoreTie}
        />
      )}
    </div>
  )
}

export default Pvp
