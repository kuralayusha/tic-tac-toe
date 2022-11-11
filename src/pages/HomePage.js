function HomePage(props) {
  function startPVP() {
    props.setPage('pvp')
  }

  function startPVC() {
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
      <h1>Home Page</h1>
      {/* icon */}
      <div className="x--o--options">
        <button className="x" onClick={selectIconX}>
          X
        </button>
        <button className="o" onClick={selectIconO}>
          O
        </button>
      </div>
      <div className="selectGameMode">
        <button className="pvc" onClick={startPVC}>
          PVC
        </button>
        <button className="pvp" onClick={startPVP}>
          PVP
        </button>
      </div>
    </div>
  )
}

export default HomePage
