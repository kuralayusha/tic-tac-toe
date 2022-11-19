import fullXIcon from '../assets/icon-x.svg'
import fullOIcon from '../assets/icon-o.svg'

function SquareForPvp({ value, onClick, isTurnOfX }) {
  return (
    <button
      className={
        value
          ? 'square--button'
          : isTurnOfX
          ? 'square--button turnX'
          : 'square--button turnO'
      }
      onClick={onClick}
    >
      {value === 'X' && <img src={fullXIcon} />}
      {value === 'O' && <img src={fullOIcon} />}
      {!value && null}
    </button>
  )
}

export default SquareForPvp
