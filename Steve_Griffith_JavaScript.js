// Ternary Operator
// () ? : ;
// question? if true, do this : if false, do this
console.log(`======== Ternary Operator ========`);

true === false ? console.log(`never`) : console.log(`always
`);

// Intro to Arrays
console.log(`======== Intro to Arrays ========`);
let characters = [`George`, `John`, `Paul`];
console.log(characters);
console.log(characters.length);
console.log(characters[1]);

// Push adds to end of array
characters.push(`Ringo`);
console.log(`push example ${characters}`);

// Pop removes from end of array
// Can save value in a variable
characters.pop();
console.log(`pop example ${characters}`);

// Unshift adds to beginning of array
characters.unshift(`Pete`);
console.log(`unshift example ${characters}`);

// Shift removed from beginning of array
// Can save value in a variable
characters.shift();
console.log(`shift example ${characters}
`);

// Sorting & Manipulating Arrays
console.log(`======== Sorting & Manipulating Arrays ========`);
console.log(characters);

// Splice removes and adds values
// 2 parameters: index to remove/replace, number of items to remove
// 3rd optional parameter: replacement(s)
characters.splice(0, 1, `Ringo`);
console.log(characters);

// Reverse flips order of array
characters.reverse();
console.log(`reverse example ${characters}`);

// Sort arranges alphabetically
characters.sort();
console.log(`sort example ${characters}`);

// indexOf finds index of value if it exists, otherwise returns -1
let position = characters.indexOf(`Pete`);
console.log(`unsuccessful indexOf returns ${position}`);
position = `John`;
console.log(`successful indexOf returns ${position}
`);

// lastIndexOf searches from end of array instead of beginning

// JS Objects
console.log(`======== Playing with JS Objects ========`);
let dog = {
    name: "Woody",
    type: "dog"
};

let cat = {
    name: "Whiskers",
    type: "cat"
};

let pets = [dog, cat];
console.log(pets);

pets.push({name: "Twitch", type: "parakeet"});

console.log(pets);
console.log(``);


// For loops
console.log(`======== JS for loops ========`);
// initialize; test; increment
for(let i=0; i<characters.length; i++) {
    console.log(`Using for loops, I can print ${characters[i]}.`);
};
console.log(``);

// For...in loops
console.log(`======== JS for...in loops ========`);
let monsters = {
    Canada: `Sasquatch`,
    Nepal: `Yeti`,
    Scotland: `Loch Ness Monster`
};
console.log(monsters);

// for variable in object
for(let property in monsters) {
    console.log(property);
    console.log(monsters[property]);
    console.log(`In ${property}, we have the ${monsters[property]}.
    `);
}

// While and Do...while loops
console.log(`======== JS while and do...while loops ========`);
// // while (condition) {
//     statements
// }

// do {
//     statements
// } while (condition)

let total = 0;

while(total < 30) {
    total += Math.floor(Math.random() * 5) + 1;
    console.log(`while total is ${total}`);
}

do{
    total += Math.floor(Math.random() * 5) + 1;
    console.log(`do...while total is ${total}`);
} while (total < 30)

console.log(``);
