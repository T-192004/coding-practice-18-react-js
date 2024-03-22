// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, isGameFinished} = props
  const showScore = isGameFinished ? 'notShow' : ''
  return (
    <div className="emoji-navbar">
      <div className="emoji-logo-container">
        <img
          className="emoji-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-logo-title">Emoji Game</h1>
      </div>
      <div className={`score-content ${showScore}`}>
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
