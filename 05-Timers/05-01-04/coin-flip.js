$(document).ready(function () {


    // Coin Flip JavaScript
    // These variables are declared for us.
    let headsCount = 0;
    let tailsCount = 0;
    let wins = 0;
    let losses = 0;

    function flipThatCoin(result) {

        //  STEP ONE:
        //  Declare and initialize a variable named randomNumber to either 0 or 1. Make it random.
        let randomNumber = Math.round(Math.random());
        //  STEP TWO:
        //  If randomNumber is equal to zero then:
        if (randomNumber === 0) {
            //  Find the div with an id of coin-image.
            //  Replace its html with an img tag containing this image:
            //  http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg
            $("#coin-image").html(`<img src="https://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg"/>`);
        } else {
            // Else:
            //  Find the div with an id of coin-image.
            //  Replace its html with an img tag containing this image:
            //  http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg
            $("#coin-image").html(`<img src="https://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg"/>`);
        }
        //  STEP THREE:
        // If result is equal to randomNumber, do the following:
        if (result === randomNumber) {
            //  Increment wins by one.
            wins++;
            //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
            $("#win-lose").html(`<h1>Winner!</h1>`);
            //  Find the div with an id of wins. Update it with the value of the wins variable.
            $("#wins").text(wins);
        } else {
            // Else:
            //  Increment losses by one.
            losses++;
            //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
            $("#win-lose").html(`<h1>Looooooser!</h1>`);
            //  Find the div with an id of losses. Update it with the value of the losses variable.
            $("#losses").text(losses);
        }
    }

    // This on click function has been completed for us.
    $("#heads").on("click", function () {
        headsCount++;
        $("#heads-chosen").text(headsCount);
        $("#guess").html("<b>Heads</b>");
        flipThatCoin(0);
    });

    $("#tails").on("click", function () {
        //  STEP FOUR:
        //  Increment tailsCount by one.
        tailsCount++;
        //  Find the span with an id of tails-chosen. Replace the html inside of the span with the tailsCount.
        $("#tails-chosen").text(tailsCount);
        //  Find the div with an id of guess. Update it with the word "Tails" bolded.
        $("#guess").html(`<strong>Tails</strong>`);
        //  Call the flipThatCoin function and pass value 1 into it.
        flipThatCoin(1);

    });
});