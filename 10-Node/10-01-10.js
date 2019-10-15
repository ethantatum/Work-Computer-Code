let arg1 = process.argv[2];
let arg2 = process.argv[3];

console.log(arg1 === arg2 ? `These are equal` : `These are not equal`);

console.log(arg1 % 7 === 0 && arg2 % 7 === 0 ? `These are both divisible by seven` : `These are not both divisible by seven`);
