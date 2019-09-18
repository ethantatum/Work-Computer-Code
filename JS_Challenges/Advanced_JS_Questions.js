//  https://github.com/lydiahallie/javascript-questions

//  1. What's the output?
// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = "Lydia";
//     let age = 21;
// }

// sayHi();
// ====================

//  2. What's the output?
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
// ====================

//  3. What's the output?
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());
// ====================

//  4. What's the output?
+true;
!"Lydia";
// ====================