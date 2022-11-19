import logo from '../assets/logo.svg'
import iconX from '../assets/icon-x-grey.svg'
import iconO from '../assets/icon-o-grey.svg'
import iconXdark from '../assets/icon-x-dark-blue.svg'
import iconOdark from '../assets/icon-o-dark-blue.svg'

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
  // console.log(props.playerOneIcon)
  return (
    <div className="homePage--container">
      <img src={logo} />
      <div className="x--o--options--container">
        <p>PICK PLAYER 1'S MARK</p>
        <div className="options">
          <button
            className={
              props.playerOneIcon === 'X' ? 'xIs active' : 'xIs'
            }
            onClick={selectIconX}
          >
            <img
              src={
                props.playerOneIcon === 'X'
                  ? `${iconXdark}`
                  : `${iconX}`
              }
            />
          </button>
          <button
            className={
              props.playerOneIcon === 'O' ? 'oIs active' : 'oIs'
            }
            onClick={selectIconO}
          >
            <img
              src={
                props.playerOneIcon === 'O'
                  ? `${iconOdark}`
                  : `${iconO}`
              }
            />
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
