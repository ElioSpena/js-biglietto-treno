const userAge = parseInt(prompt("Quanti anni hai?", 31));
const curYear = 2025;
const userBirth = curYear - userAge;
let message = `sei nato nel ${userBirth}`;

console.log(message);