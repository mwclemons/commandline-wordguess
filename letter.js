function Letter(character, beenGuessed) {
    this.character = character;
    this.beenGuessed = beenGuessed;

    this.UpdateLetter = function() {
        if (this.character === " ") {
            return "  ";
        } else if (this.character === "-") {
            return "- ";
        } else if (this.character === "'") {
            return "' ";
        } else if (this.beenGuessed) {
            return this.character+ " "
        } else {
            return "_ "
        };
    };

    this.Guess = function(guessedCharacter) {
        if (this.character.toLowerCase() === guessedCharacter.toLowerCase() ) {this.beenGuessed = true} 
    };
};
  

module.exports = Letter;