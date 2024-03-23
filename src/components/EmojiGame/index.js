// Write your code here.
import './index.css'

const WinorLoseCard = props => {
  const {didWon, score, playAgain} = props
  const imgUrl = didWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const title = didWon ? 'You Won' : 'You Lose'
  const scoreTitle = didWon ? 'Best Score' : 'Score'
  const onClickPlayAgain = () => {
    playAgain()
  }
  return (
    <div className="win-lose-card">
      <div className="result-content">
        <h1 className="result-tile">{title}</h1>
        <p className="result-score-tile">{scoreTitle}</p>
        <p className="final-score">{score}/12</p>
        <button
          className="playagain-btn"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img className="result-img" src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinorLoseCard
