# Build a Game in React

## Build GLiW! The **G**uess **L**etters **i**n **W**ords Game!

### Game Play Description

- Make an array of words centered around a theme (food, music, movies, the art of pickling beets, etc) - choose 2- 10 words. **ONLY** choose single words. For bonus you can do longer expressions/deal with spaces etc. But first - just get the game working fully with single words!

- There will be a game board that on start, will chose a random word from your array that will show the number of letters, starting with all the letters hidden. When the letters are hidden, display an underscore `_`

So the word `hello` - would look like `_` `_` `_` `_` `_`

- The player will be able to make 6 wrong guesses. If the player guesses a correct letter, the number of guesses does not decrease.

- if the player guesses correctly, then the view will be updated. For example if the player guesses `e` - the board will look like this

like `_` `e` `_` `_` `_`

- if the player guesses a letter that is used multiple times, it will uncover every instance of that letter. For example, if the user gussed `l`:

`_` `e` `l` `l` `_`

- if the user is out of guesses - make an alert that displays a message that says the player lost. BONUS - add functionality to show what the word was on loss

- if the user has correctly guessed the word - make an alert that displays a message that says the player won. BONUS - disable the dropdown menu and update the views of the board so the player cannot make any further plays and the only option is to press the start button again.

## Tips

React should render views based on data. Try to separate the game logic from the display logic. Use the data/game logic to update the view.

Break it down to tiny solvable steps (follow your own order, this is just an example):

- make an array of words
- select a random word
- console log the random word
- get react to render the word in the browser
- use some logic that based on whether the letter is guessed: if it is not guessed it will display `_` or if the letter is guessed then display that
- if the guess is correct don't decrease the number of guesses
- if the guess is incorrect decrease the number of guesses and have that show up in the browser
- etc

If you are stuck, try to think of an even simpler step to do, like just trying to console log a value.

## Great Usage of classes

### Write Code for You

the following classes can be really helpful for you in building out your game logic. However, if you have a different approach in mind - go for it!

#### Letter Class

##### Object Attributes

- value
  - a string
- hidden
  - a boolean (should be set to true by default)
- show()
  - a function that will set hidden to false
- display()
  - a function that will return `_` if the letter is hidden and return the value if the letter is not hidden

#### Word Class

##### Object Attributes

- letters
  - an array of Letter objects
- getLetters(newWord)
  - accepts an input argument, a string (a chosen random word from our words array) - it will split the string or the chosen word and create a new Letter object with each letter. Then it will push this new object into the letters array.
- isWordCompletelyGuessed()
  - a function: checks if every letter's hidden property is false, if they are all false, then the word is fully guessed. If the word is not fully guessed return false. If it is fully guessed, return true
- testLetter(letter)
  - a function that takes a letter that the player has chosen. If the letter matches a letter in the word in play, then change the value of the Letter objects hidden to true and return the value `true`. If the letter does not match, then return the value `false`.

### Starter code

- you are provided with starter code that:
- **AFTER** you press start, you'll be able to choose as single letter and it will alert the letter you've chosen
- has a starting state and startGame function that will help you get started on writing game logic, so you're not starting with a blank slate
- if you would like to start with a a totally blank slate it's totally cool. But note, choosing a letter by clicking on it, using a keyup listener, input field - is all a bit trickier and will require more thought/logic than the drop down menu provided
