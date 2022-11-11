import { useState } from 'react'
import Square from './Square'

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
  const [isX, setIsX] = useState(playerOneIcon === 'X' ? true : false)

  function handleClick(i) {
    squares[i] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)
  }

  return (
    <div>
      {/* TODO: en üstte -icon -sıraKimde -baştanBaşlama
      orta bölümde 3x3 oyun alanı
      alt bölümde -1.oyuncuSkoru -beraberlikSkoru -2.oyuncuSkoru*/}
      <div className="topBar">
        {/* icon */}
        {/* sıra kimde */}
        {/* baştan başlama */}
      </div>

      <div className="gameBoard">
        <div className="board--row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board--row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board--row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>

      <div className="scoreBoard">
        {/* 1.oyuncuSkoru */}
        {/* beraberlikSkoru */}
        {/* 2.oyuncuSkoru */}
      </div>
    </div>
  )
}

export default Pvp
