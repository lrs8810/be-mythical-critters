var _ = require('lodash');

class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if (this.riddles.length > 3){
      this.riddles.shift()
    }
  }

  attemptAnswer(answer) {
    var correct = _.remove(this.riddles, function(riddle) {
      return riddle.answer === answer;
    });
    if (this.riddles.length === 0) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
    } else if (correct.length > 0) {
      return 'That wasn\'t that hard, I bet you don\'t get the next one'
    } else {
      this.heroesEaten++;
    }
  }
}

module.exports = Sphinx;
