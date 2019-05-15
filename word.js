var Letter = require("./letter");

function Word(myWord) {
    this.myLetters = [];
    this.myWord = myWord;
    this.wordGuessedCorrectly = false;

    for (x=0;x<myWord.length;x++) {
        this.myLetters.push(new Letter(myWord[x], false));
    }

    this.toString = function() {
        var myString = ""
        for (x=0;x<this.myLetters.length;x++) {
            myString = myString + this.myLetters[x].UpdateLetter()
        } 

        if (!myString.includes("_")) {
            this.wordGuessedCorrectly = true;
        }
        
        return myString;
    };

    this.CheckLetter = function(myGuess) {
        for (x=0; x<this.myLetters.length;x++) {
            this.myLetters[x].Guess(myGuess)
        }
    }
};

module.exports = Word;


