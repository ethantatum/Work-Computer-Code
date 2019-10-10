$(document).ready(function () {

    // Global Variables
    const words = ["parabola", "lateralus", "aenima", "forty-six and two", "eulogy"];
    let chosenWord;
    let hiddenWord = [];

    let lettersGuessed = [];
    let guessesRemaining = 9;
    let wins = 0;
    let losses = 0;

    function renderStats() {
        $("#guesses-remaining").text(guessesRemaining);
        $("#wins").text(wins);
        $("#losses").text(losses);
    };
    renderStats();
    showUnderscores();

    function showUnderscores() {
        chosenWord = words[Math.floor(Math.random() * words.length)];
        chosenWord = chosenWord.split("");
        console.log(`chosenWord is ${chosenWord}`);
        for (let char of chosenWord) {
            if (char === " " || char === "-") {
                hiddenWord.push(char);
            } else {
                hiddenWord.push("_");
            }
        }
        $("#word-display").text(hiddenWord.join(""));

    };

    $(document).keyup(function (event) {
        userGuess = event.which;
        console.log(`${userGuess} is a ${typeof userGuess}`);

        if (userGuess < 65 || userGuess > 90) {
            console.log(`${userGuess} isn't a letter`);
            alert("That's not a letter! Try again...");
        } else {
            userGuess = String.fromCharCode(userGuess).toLowerCase();
            console.log(userGuess);
            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === userGuess) {
                    hiddenWord[i] = chosenWord[i];
                    $("#word-display").text(hiddenWord.join(""));
                } else {
                    wrongGuess(userGuess);
                }
            }
            function wrongGuess(letter) {
                if (lettersGuessed.indexOf(letter) > -1) {
                    console.log(lettersGuessed);
                    
                    alert(`You already guessed ${letter}, try another letter.`);
                } else {
                    lettersGuessed.push(letter);
                    $("#letters-guessed").text(lettersGuessed.join(", "));
                }
            }
        }

    });
});
