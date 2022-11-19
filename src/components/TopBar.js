import logo from '../assets/logo.svg'
import reStart from '../assets/icon-restart.svg'
import fullXIcon from '../assets/icon-x-grey.svg'
import fullOIcon from '../assets/icon-o-grey.svg'

function TopBar({ turn, setAskExit }) {
  function exitQuestion() {
    setAskExit(true)
  }
  return (
    <div className="topBar">
      <img src={logo} />
      <p>
        <img src={turn === 'X' ? `${fullXIcon}` : `${fullOIcon}`} />
        <h6>TURN</h6>
      </p>
      <button onClick={exitQuestion}>
        <img src={reStart} />
      </button>
    </div>
  )
}

export default TopBar
