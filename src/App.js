import React from 'react'

// game  building blocks
const letters = ' abcdefghijklmnopqrstuvwxyz'
const words = [
  'ride',
  'national anthem',
  'money',
  'summertime',
  'sadness',
  'love',
  'cinnamon',
  'California',
  'bartender',
  'flipside',
  'beautiful',
  'problems',
  'blue',
  'velvet',
  'daddy',
  'cherry',
  'cola',
  'cry',
  'Coachella',
  'Florida',
  'brooklyn',
  'baby',
  'freak',
  'free',
  'America',
  'honeymoon',
  'hope',
  'feelings',
  'Lolita',
  'power',
  'glory',
  'sad',
  'girl',
  'religion',
  'cool',
  'bummer',
  'mustang',
  'beach',
  'the greatest',
  'video games',
  'art deco',
  'happiness is a butterfly',
  'lucky ones',
  'music to watch boys to',
  'off to the races',
  'west coast',
  'million dollars'
]

// game letters
class Letter {
  constructor(value) {
    this.value = value
    this.hidden = true
    // deal with words that have spaces in them
    if (value === ' ') {
      this.hidden = false
    }
  }
  show() {
    this.hidden = false
  }
  display() {
    return this.hidden ? '_' : this.value
  }
}

// game word + game logic
class Word {
  constructor(word) {
    this.letters = []
    this.getLetters(word)
  }
  // create array of letter objects using Letter class
  getLetters(newWord) {
    for (let letter of newWord) {
      this.letters.push(new Letter(letter))
    }
  }
  isWordFullyGuessed() {
    // if there are no letters hidden then we have a winner!
    if (!this.letters.some(l => l.hidden)) {
      return true
    }
    return false
  }
  // test a letter played, triggered by option selection in browser
  testLetter(playLetter) {
    let letterFound = false
    // iterate over letters in the word
    for (let letter of this.letters) {
      // if there is a match, then set the letter's hidden property to true using the show function
      if (playLetter === letter.value.toLowerCase()) {
        letter.show()
        // set play value (will allow for update number of guesses correctly)
        letterFound = true
      }
    }
    // return whether the letter was found and if the word is fully guessed
    return letterFound
  }
}

// small component to show guesses remaining
class Guesses extends React.Component {
  render() {
    return (
      <div className="guesses-container">
        <h2>Guesses Left: {this.props.guesses}</h2>
      </div>
    )
  }
}

// small component to show letters left to play - BONUS
class WrongLetters extends React.Component {
  render() {
    return (
      <p>
        {this.props.wrongLetters.map(letter => (
          <span className="wrong-letters" key={letter}>
            {letter}
          </span>
        ))}
      </p>
    )
  }
}

// main component
class App extends React.Component {
  // start the game state - need otherwise errors out without componentDidMount
  state = {
    lettersLeft: [],
    wrongLetters: [],
    guesses: 'press start game',
    playLetter: ' '
  }
  // start the game on start game button, set the variables, set the word to be guessed
  startGame = () => {
    this.setState({
      guesses: 6,
      // always splits a string, doesn't lose the original 26 letters
      lettersLeft: letters.split(''),
      // creates a word object to play
      word: this.chooseWord(words),
      // the first options selection is empty space
      letterplay: ' ',
      wrongLetters: []
    })
  }
  // choose a word to guess
  chooseWord = words => {
    return new Word(words[Math.floor(Math.random() * words.length)])
  }
  // upon choosing a letter from the drop down, play that letter
  handleSelect = event => {
    const letterChoice = event.target.value
    // test the letter - will update the word object not best practices but ok here
    // returns true/false depending if letter was in the word
    const playLetter = this.state.word.testLetter(letterChoice)

    if (!playLetter) {
      const addWrongLetter = [...this.state.wrongLetters, letterChoice].sort()
      this.setState({
        wrongLetters: addWrongLetter
      })
    }
    // reduce the letters in play both on 'the board' and the options menu
    let newLettersLeft = this.state.lettersLeft.filter(l => l !== letterChoice)
    // set how many guesses are left based on the play, if the guess was wrong, subtract, else, do not subtract the score
    let guessesLeft = playLetter ? 0 : -1
    // is the game over?
    // first, was the word fully guessed? Let's check
    if (this.state.word.isWordFullyGuessed()) {
      alert('you won')
      // stop new turns from happening, because person won
      newLettersLeft.length = 0
    }
    // if there are no guesses left (this is the last play hence 1 guess is left at the start)
    // end the game
    // show the word
    // disable the option input to make it clear the game is over and there is nothing to do but press start
    // set guesses to 0 (game over state)
    // alert player of their epic failure
    if (this.state.guesses === 1) {
      this.state.word.letters.forEach(letter => letter.show())
      newLettersLeft.length = 0
      guessesLeft = -1
      alert('you lost')
    }

    // based on how the play/game is going update state/update the view
    this.setState({
      word: this.state.word,
      lettersLeft: newLettersLeft,
      guesses: this.state.guesses + guessesLeft,
      letterPlay: ' '
    })
  }
  render = () => {
    return (
      <div className="container">
        <h1>The Guess Letters in Words Game (GLiW Game)</h1>
        <button onClick={this.startGame}>Start Game!</button>
        <Guesses guesses={this.state.guesses} />
        <WrongLetters wrongLetters={this.state.wrongLetters} />
        <div>
          {this.state.lettersLeft.length !== 0 ? (
            <>
              <label>Play a letter!</label>
              <select
                value={this.state.letterPlay}
                onChange={this.handleSelect}
              >
                {this.state.lettersLeft.map((letter, index) => (
                  <option key={index} value={letter}>
                    {letter}
                  </option>
                ))}
              </select>
            </>
          ) : null}
        </div>

        <div>
          <p>
            {this.state.word
              ? this.state.word.letters.map((letter, index) => (
                  <span key={index + letter.value}>{letter.display()}</span>
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
