import fullXIcon from '../assets/icon-x.svg'
import emptyXIcon from '../assets/icon-x-outline.svg'
import fullOIcon from '../assets/icon-o.svg'
import emptyOIcon from '../assets/icon-o-outline.svg'

function Square({ value, onClick }) {
  return (
    <button className="square--button" onClick={onClick}>
      {value === 'X' && <img src={fullXIcon} />}
      {value === 'O' && <img src={fullOIcon} />}
      {!value && null}
    </button>
  )
}

export default Square
