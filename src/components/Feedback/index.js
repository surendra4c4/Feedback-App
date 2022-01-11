// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {click: true}

  onHappy = () => {
    this.setState(prevState => ({click: !prevState.click}))
  }

  render() {
    const {click} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="content-container">
          {click ? (
            <div className="width-container">
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="list-container">
                <li className="list-item">
                  <button
                    className="button"
                    type="button"
                    onClick={this.onHappy}
                  >
                    <img
                      src={emojis[0].imageUrl}
                      alt={emojis[0].name}
                      className="emoji"
                    />
                  </button>
                  <h1 className="emoji-name">{emojis[0].name}</h1>
                </li>
                <li className="list-item">
                  <button
                    className="button"
                    type="button"
                    onClick={this.onHappy}
                  >
                    <img
                      src={emojis[1].imageUrl}
                      alt={emojis[1].name}
                      className="emoji"
                    />
                  </button>
                  <h1 className="emoji-name">{emojis[1].name}</h1>
                </li>
                <li className="list-item">
                  <button
                    className="button"
                    type="button"
                    onClick={this.onHappy}
                  >
                    <img
                      src={emojis[2].imageUrl}
                      alt={emojis[2].name}
                      className="emoji"
                    />
                  </button>
                  <h1 className="emoji-name">{emojis[2].name}</h1>
                </li>
              </ul>
            </div>
          ) : (
            <div className="love-emoji-container">
              <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
              <h1 className="thankyou">Thank You</h1>
              <p className="feedback-para">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
