import fullXIcon from '../assets/icon-x.svg'
import fullOIcon from '../assets/icon-o.svg'

function SquareForPvc({ value, onClick, isTurnOfX, playerOneIcon }) {
  let nameClass

  if (playerOneIcon === 'X' && !value) {
    nameClass = 'square--button turnX'
  } else if (playerOneIcon === 'O' && !value) {
    nameClass = 'square--button turnO'
  } else {
    nameClass = 'square--button'
  }

  return (
    <button onClick={onClick} className={nameClass}>
      {value === 'X' && <img src={fullXIcon} />}
      {value === 'O' && <img src={fullOIcon} />}
      {!value && null}
    </button>
  )
}

export default SquareForPvc
