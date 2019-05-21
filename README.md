# commandline-wordguess

**Assignment** 

Create a command line node word guess game that uses the npm inquirer package to interact with the user as the user guesses a word that initially represented by blanks terminal.  The purpose of this assignment was to demonstrate the use of npm packages, constructors, and the ability to create and use modules.  

**Solution** 

This app has 3 files:
1. letter.js - This file contains a constructor that defines a letter that is in the to be guessed word.  The Letter constructor is exported and later required by word.js. The Letter constructor has the following:
    - charachter - a string value of the letter
    - beenGuessed - a boolean value representing whether or not the letter has been guessed by the user yet
    - UpdateLetter - a function that returns the letter if the letter has already been guessed or a dash if it hasn't been guessed
    - Guess - a function that updates the boolean value to true if a passed in character is the same as the underlying letter
2. word.js - This file requires letter.js and contains a constructor that defines the word to be guessed by the user. The Word constuctor is exported and later required by index.js. The Word constructonr has the following:
    - myLetters - an array of letter objects (as defined in letter.js) representing the to be guessed word
    - myWord - a string value of the to be guessed word
    - wordGuessedCorrectly - a boolean representing wheter or not the entire word has been guessed correctly 
    - toString - a function that returns a string of letters and dashes based on whether not certain letters have been guessed yet
    - CheckLetter - a function that takes in a letter and compares it to the letter objects in the word array by calling the letter.Guess function
3. index.js - This file requres word.js and inquirer.js. It contains all the logic for the word guess game. 
    - this file reuses some of the logic from the html version of the word guess game including the array of guessable words.  
    - An athlete is randomly selected from the array of guessable words.  The logic that does this random selection makes sure that a new athlete is picked every time, at least until the entire array has been exhausted. 
    - the main function in this file is a recursive function called getGuess that first validates that the user's input is a valid guess, then based on the valid guess will either update the screen by displaying the letter in the word or telling the user that the guessed letter is not in the word.  There is also logic to limit the number of guesses the user has to 10.  The game is over when the user misses a word. 


**Game Image #1:** ![guess-a-letter](https://github.com/mwclemons/commandline-wordguess/raw/master/images/guess-a-letter.png)
**Game Image #2:** ![incorrect-guess](https://github.com/mwclemons/commandline-wordguess/raw/master/images/incorrect-guess.png)