const words = [
  "ride", "national", "anthem", "money", "summertime", "sadness", "love", "cinnamon", "California", "bartender", "flipside", "beautiful", "problems", "blue", "velvet", "daddy", "cherry", "cola", "Coachella", "Florida", "brooklyn", "baby", "freak", "free", "America", "honeymoon", "hope", "feelings", "Lolita", "power", "glory", "sad", "girl", "religion", "cool", "bummer", "mustang",
]

let letters = 'abcdefghijklmnopqrstuvwxyz'
let lettersArray = letters.split('')


class Letter {
  constructor (value) {
    this.value = value,
    this.hidden = true
  }
  show () {
    this.hidden = false
  }
  display () {
    return this.hidden ? '_' : this.value
  }
}


class Word {
  constructor (word) {
    this.letters = []
    this.getLetters(word)
  }
  getLetters(newWord) {
    for (let letter of newWord){
      this.letters.push(new Letter(letter))
    }
  }
  isFound() {

  }
  test(letter) {

  }
  render () {
    return 'string'
  }
}
