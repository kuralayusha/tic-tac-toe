import logo from '../assets/logo.svg'
import iconX from '../assets/icon-x.svg'
import iconO from '../assets/icon-o.svg'

function HomePage(props) {
  function startPVP() {
    props.setGameMode('pvp')
    props.setPage('pvp')
  }

  function startPVC() {
    props.setGameMode('pvc')
    props.setPage('pvc')
  }

  function selectIconX() {
    props.setPlayerOneIcon('X')
  }

  function selectIconO() {
    props.setPlayerOneIcon('O')
  }
  console.log(props.playerOneIcon)
  return (
    <div className="homePage--container">
      <img src={logo} />
      <div className="x--o--options--container">
        <p>PICK PLAYER 1'S MARK</p>
        <div className="options">
          <button className="x" onClick={selectIconX}>
            <img src={iconX} />
          </button>
          <button className="o" onClick={selectIconO}>
            <img src={iconO} />
          </button>
        </div>
        <small>REMEMBER : X GOES FIRST</small>
      </div>
      <div className="selectGameMode">
        <button className="pvc" onClick={startPVC}>
          NEW GAME (VS CPU)
        </button>
        <button className="pvp" onClick={startPVP}>
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  )
}

export default HomePage
