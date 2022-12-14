import { useEffect, useState } from 'react'

// import pages for game over and exit
import ExitPage from './ExitPage'
import GameOverPage from './GameOverPage'
// import components
import TopBar from '../components/TopBar'
import ScoreBoardForPvp from '../components/ScoreBoardForPvp'
import SquareForPvp from '../components/SquareForPvp'

function Pvp({
  playerOneIcon,
  setPage,
  gameMode,
  setGameMode,
  setPlayerOneIcon,
}) {
  // state for the 3x3 squares of the game board (9 squares)
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

  // state for the turn of X
  const [isTurnOfX, setIsTurnOfX] = useState(true)

  // states for scores
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [scoreTie, setScoreTie] = useState(0)

  // state for exit page
  const [askExit, setAskExit] = useState(false)

  // state for game over page
  const [showGameOver, setShowGameOver] = useState(false)

  const winner = calculateWinner(squares)
  let status // status is the text that shows the winner or the turn
  let turn // turn is the text that shows the turn of X or O

  // if there is a winner, the turn text will show the winner
  turn = isTurnOfX ? 'X' : 'O'
  // if the winner is X, the turn text will show X TURN instead of X turn (to show that X won)
  if (winner === 'X') {
    turn = 'X TURN'
  } else if (winner === 'O') {
    turn = 'O TURN'
  }

  // handles the click on the squares to place X or O
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = isTurnOfX ? 'X' : 'O'
    setSquares(squares)
    setIsTurnOfX(!isTurnOfX)
  }

  //if there is a winner, the game over page will show and the scores will be updated
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

  // this algorithm checks if there is a winner
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

  // this function prints the squares
  const renderSquare = (i) => {
    return (
      <SquareForPvp
        value={squares[i]}
        onClick={() => handleClick(i)}
        isTurnOfX={isTurnOfX}
      />
    )
  }

  // returns the main page of the game
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
