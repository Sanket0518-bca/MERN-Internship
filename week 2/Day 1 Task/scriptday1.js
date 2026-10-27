
console.log("===== TASK 1: DESTRUCTURING =====");

const car = {
    brand: "Tesla",
    model: "Model 3",
    color: "white"
};

const { brand, model, color } = car;

console.log("Brand:", brand);
console.log("Model:", model);
console.log("color:",color);


console.log("===== TASK 2: SPREAD AND REST =====");

const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "mango"];

const allFruits = [...fruits, ...moreFruits];

console.log("Merged Fruits:", allFruits);

const printFruits = (...items) => {
    console.log("Fruits:", ...items);
};

printFruits(...allFruits);


console.log("===== TASK 3: TEMPLATE LITERALS =====");

const name = "Priya";
const course = "JavaScript Mastery";

console.log(`Hello ${name}! Welcome to ${course}.`);


console.log("===== TASK 4: ES6 REFACTORING =====");

const user = {
    name: "Aman",
    age: 22
};

const greet = (user) =>
    `Hello ${user.name}, you are ${user.age} years old.`;

console.log(greet(user));


// Button click function
const showMessage = () => {
    document.getElementById("message").textContent =
        "Welcome to ES6 JavaScript!";
};
