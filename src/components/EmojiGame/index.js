/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinorLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    score: 0,
    isGameFinished: false,
    didWon: false,
    clickedEmojiList: [],
  }

  checkEmoji = id => {
    const {clickedEmojiList} = this.state
    const isClickEmojiPresent = clickedEmojiList.includes(id)
    if (isClickEmojiPresent) {
      this.setState({isGameFinished: true, didWon: false})
    } else {
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
        score: prevState.score + 1,
      }))
    }
    const {score} = this.state
    if (score === 12) {
      this.setState({isGameFinished: true, didWon: true})
    }
  }

  playAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState({
      score: 0,
      isGameFinished: false,
      didWon: false,
      clickedEmojiList: [],
    })
  }

  render() {
    const {topScore, score, isGameFinished, didWon} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    const showEmojiList = (
      <ul className="emoji-list-card-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            eachEmoji={eachEmoji}
            key={eachEmoji.id}
            checkEmoji={this.checkEmoji}
          />
        ))}
      </ul>
    )
    const showResultCard = (
      <WinorLoseCard didWon={didWon} score={score} playAgain={this.playAgain} />
    )
    const showBottomCard = isGameFinished ? showResultCard : showEmojiList
    return (
      <div className="emoji-app-container">
        <NavBar
          topScore={topScore}
          score={score}
          isGameFinished={isGameFinished}
        />
        <div className="emoji-card-container">{showBottomCard}</div>
      </div>
    )
  }
}

export default EmojiGame
