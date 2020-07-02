import React from 'react'

// game  building blocks
const letters = ' abcdefghijklmnopqrstuvwxyz'
const words = ['hello', 'word']

// game letters

// game word + game logic

// main component
class App extends React.Component {
  // start the game state - need otherwise errors out without fancicer stuff
  state = {
    lettersLeft: [],
    guesses: 'press start game',
    playLetter: ' '
  }
  // start the game on start game button, set the variables, set the word to be guessed
  startGame = () => {
    this.setState({
      lettersLeft: letters.split(''),
      letterPlay: ' '
    })
    // call chooseWord to select a word to guess, etc
  }
  // choose a word to guess
  chooseWord = words => {}
  // upon choosing a letter from the drop down, play that letter
  handleSelect = event => {
    const letterChoice = event.target.value
    alert(`you have chosen ${letterChoice}`)
    // write more code here, create more functions, as needed
    // example return letter play options menu back to default
    this.setState({
      letterPlay: ' '
    })
  }
  render = () => {
    return (
      <div className="container">
        <h1>The Guess Letters in Words Game (GLiW Game)</h1>
        <button onClick={this.startGame}>Start Game!</button>
        <label>
          Play a letter! (press start to load the drop down options menu)
        </label>
        <select value={this.state.letterPlay} onChange={this.handleSelect}>
          {this.state.lettersLeft.map((letter, index) => (
            <option key={index} value={letter}>
              {letter}
            </option>
          ))}
        </select>
        <div>
          <p>
            {this.state.word
              ? this.state.word.letters.map((letter, index) => (
                  <span key={index + letter.value}>
                    Render your letters/ underscores here
                  </span>
                ))
              : null}
          </p>
        </div>
      </div>
    )
  }
}

// see word letters for testing
//   <pre>{this.state.word ? JSON.stringify(this.state.word) : null}</pre>
export default App
