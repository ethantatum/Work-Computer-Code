// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================
const inquirer = require("inquirer");
const colors = require("colors");

console.log(`
    +*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+
    *+                             +*
    +*  Welcome to Zombie Slayer!  *+
    *+                             +*
    +*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+
`.trap.bold);

let userHealth = 40;
let zombieHealth = 10;
let choices = ["Tire Iron", "Pistol", "Sledgehammer", "Pitchfork", "Decorative Samurai Sword"];

function gamePlay() {
    console.log(`
Your health is ${userHealth}.`.bold);
    console.log(`
The zombie's health is ${zombieHealth}.
`.bold);


    inquirer
        .prompt([
            {
                type: "list",
                name: "userWeapon",
                message: "Choose your weapon - but choose carefully!",
                choices: choices
            }
        ])
        .then(response => {
            console.log(`
You choose a ${response.userWeapon}.
            `);
            let randomWeapon = choices[Math.floor(Math.random() * choices.length)];
            let hitPoints = Math.floor(Math.random() * 5) + 1;
            if (response.userWeapon === randomWeapon) {
                console.log(`Your ${response.userWeapon} strikes a blow! The zombie loses ${hitPoints} health!
                `.bold.green);
                zombieHealth = zombieHealth - hitPoints;
                if (zombieHealth <= 0) {
                    return console.log(`A killing blow! The zombie shudders and lies still - you are victorious!
                    `.brightGreen);
                } else {
                    playAgain();
                }
            } else {
                console.log(`Oh no! The zombie dodged your ${response.userWeapon} attack, and manages to bite you.
You lose ${hitPoints} health!
                `.bold.red);
                userHealth = userHealth - hitPoints;
                if (userHealth <= 0) {
                    return console.log(`That final bite takes the last of your strength, and as your eyes slowly close, 
your only thought is "Please don't let me become one of them..."
                    `.bold.brightRed);
                } else {
                    playAgain();
                }
            }

        });
};

function playAgain() {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "playAgain",
                message: "Will you try to attack again?"
            }
        ])
        .then(response => {
            if (response.playAgain) {
                gamePlay();
            } else {
                console.log(`You try to escape, but the zombie pounces...
you hear yourself scream as all fades to black.
                `.bold.brightRed);
            }
        })
};

gamePlay();
