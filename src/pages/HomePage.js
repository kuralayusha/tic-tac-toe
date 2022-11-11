function HomePage() {
  return (
    <div className="homePage--container">
      <h1>Home Page</h1>
      <div className="x--o--options">
        <button className="x">X</button>
        <button className="o">O</button>
      </div>
      <div className="selectGame">
        <button className="pvp">PVP</button>
        <button className="pvc">PVC</button>
      </div>
    </div>
  )
}

export default HomePage
