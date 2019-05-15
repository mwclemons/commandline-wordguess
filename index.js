var Word = require("./word");
var inquirer = require('inquirer');

var currentID;
var previousIDs = [];
var guessesRemaining;
var guessedLetters = [];
var numCorrect = 0;
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var athletes = [
    {athName: "Dirk Nowitzki", athHint: "Mavs GOAT", athImage: "assets/images/dirk.jpg" },
    {athName: "Michael Jordan", athHint: "NBA GOAT", athImage: "assets/images/mj.jpg" },
    {athName: "Peyton Manning", athHint: "Eli's Brother", athImage: "assets/images/peyton.jpg" },
    {athName: "Tom Brady", athHint: "NFL Cheating GOAT", athImage: "assets/images/tb13.jpg" },
    {athName: "Mike Trout", athHint: "Probable MLB GOAT", athImage: "assets/images/trout.jpg" },
    {athName: "Nolan Ryan", athHint: "The Express", athImage: "assets/images/express.jpg" },
    {athName: "Lance Armstrong", athHint: "Cheating GOAT", athImage: "assets/images/lance.jpg" },
    {athName: "Lebron James", athHint: "Not 2, Not 3, Not 4, Not 5, Not 6, Not 7...", athImage: "assets/images/lebron.jpg" },
    {athName: "Muhammad Ali", athHint: "The Greatest", athImage: "assets/images/ali.jpg" },
    {athName: "Mike Tyson", athHint: "Undisputed", athImage: "assets/images/tyson.jpg" },
    {athName: "Tiger Woods", athHint: "Wearing red on Sundays", athImage: "assets/images/tiger.jpg" },
    {athName: "Wayne Gretzky", athHint: "The Great One", athImage: "assets/images/wayne.jpg" },
    {athName: "Deion Sanders", athHint: "Prime Time", athImage: "assets/images/deion.jpg" },
    {athName: "Serena Williams", athHint: "Most Dominant Ever", athImage: "assets/images/serena.jpg" },
    {athName: "Wilt Chamberlain", athHint: "The Stilt", athImage: "assets/images/wilt.jpg" },
    {athName: "Florence Joyner", athHint: "Flo-Jo", athImage: "assets/images/flojo.jpg" },
    {athName: "Shawn Kemp", athHint: "The Reignman", athImage: "assets/images/kemp.jpg" },
    {athName: "Jon Jones", athHint: "Bones", athImage: "assets/images/bones.jpg" },
    {athName: "Luka Doncic", athHint: "The Matador", athImage: "assets/images/luka.jpg" },
    {athName: "Kobe Bryant", athHint: "Black Mamba", athImage: "assets/images/kobe.jpg" },
    {athName: "Allen Iverson", athHint: "The Answer", athImage: "assets/images/iverson.jpg" },
    {athName: "Josh Hamilton", athHint: "Hambone", athImage: "assets/images/ham.jpg" },
    {athName: "Hakeem Olajuwon", athHint: "The Dream", athImage: "assets/images/dream.jpg" },
    {athName: "Shaquille O'neal", athHint: "The Diesel", athImage: "assets/images/shaq.jpg" },
    {athName: "Ray Allen", athHint: "Jesus Shuttlesworth", athImage: "assets/images/ray.jpg" },
    {athName: "Michael Irvin", athHint: "The Playmaker", athImage: "assets/images/irvin.jpg" },
    {athName: "Alex Rodriguez", athHint: "Coulda been MLB GOAT", athImage: "assets/images/arod.jpg" },
    {athName: "Steve McNair", athHint: "Titans GOAT", athImage: "assets/images/mcnair.jpg" },
    {athName: "Steve Nash", athHint: "Captain Canada", athImage: "assets/images/nash.jpg" },
    {athName: "Usain Bolt", athHint: "Lightning", athImage: "assets/images/bolt.jpg" },
    {athName: "Randy Johnson", athHint: "The Big Unit", athImage: "assets/images/unit.jpg" },
    {athName: "Mariano Rivera", athHint: "Sandman", athImage: "assets/images/sand.jpg" },
    {athName: "Ken Griffey Jr", athHint: "The Kid", athImage: "assets/images/kid.jpg" },
    {athName: "Mike Modano", athHint: "Stars GOAT", athImage: "assets/images/modano.jpg" },
    {athName: "Giannis Antetokounmpo", athHint: "Greek Freak", athImage: "assets/images/giannis.jpg" }

];

function pickNextAthlete() {
    currentID = Math.floor(Math.random() * (athletes.length));
    while (previousIDs.includes(currentID) && previousIDs.length<athletes.length){
        currentID = Math.floor(Math.random() * (athletes.length));
    };
    previousIDs.push(currentID);
    guessesRemaining = 10;
    guessedLetters = [];
    currentWord = new Word (athletes[currentID].athName);
    console.log("Guess the word!!");
    console.log("Hint: " + athletes[currentID].athHint);
    console.log(currentWord + "")
    getGuess();
};

var currentWord;
pickNextAthlete();

function getGuess() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "myGuess",
            validate: function(value) {
                if (!alphabet.includes(value)) {
                    return "That's not a letter!! Try Again!";
                } else if (value.length > 1) {
                    return "You entered more than a single letter!! Try Again!";
                } else if (guessedLetters.includes(value)) {
                    return "You've already tried that letter!! Try Again!";
                } else {
                    return true;
                }
            }
        }
    ])
    .then(function(response) {
        currentWord.CheckLetter(response.myGuess);
        guessedLetters.push(response.myGuess)
        if (currentWord.myWord.toLowerCase().includes(response.myGuess.toLowerCase())) {
            console.log(currentWord + "")
            console.log('\x1b[32m%s\x1b[0m',"Correct!!!")
            if (currentWord.wordGuessedCorrectly) {
                console.log("You got it right! Next word!")
                numCorrect++;
                pickNextAthlete();
            } else {
                getGuess();
            }
        } else {
            console.log(currentWord + "")
            console.log('\x1b[31m%s\x1b[0m',"Incorrect!!!")
            guessesRemaining--;
            console.log("Guesses remaining " + guessesRemaining + "!!!")
            if (guessesRemaining > 0) {
                getGuess();
            } else {
                console.log('\x1b[31m%s\x1b[0m',"Game Over!!!")
                console.log("You got " + numCorrect + " words correct.")
            }
        }
    });
};




