// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, checkEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji
  const onClickCheckEmoji = () => {
    checkEmoji(id)
  }
  return (
    <li>
      <button className="emoji-card" onClick={onClickCheckEmoji} type="button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
