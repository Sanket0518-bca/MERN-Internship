console.log("===== TASK 1: MAP AND FILTER =====");

const prices = [120, 250, 300, 450, 600];

// Filter prices greater than 250
const filteredPrices = prices.filter(price => price > 250);

// Apply 10% discount
const discountedPrices = filteredPrices.map(
    price => price * 0.90
);

console.log("Original Prices:", prices);
console.log("Filtered Prices:", filteredPrices);
console.log("Discounted Prices:", discountedPrices);


console.log("===== TASK 2: REDUCE =====");

const expenses = [
    { category: "Food", amount: 300 },
    { category: "Transport", amount: 150 },
    { category: "Shopping", amount: 400 }
];

// Calculate total expense
const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
);

console.log(`Total Expense: ₹${totalExpense}`);


console.log("===== TASK 3: MAP, FILTER AND REDUCE =====");

const scores = [45, 80, 90, 35, 60, 75];

// Filter passing scores
const passingScores = scores.filter(score => score >= 50);

// Add 10 bonus marks
const bonusScores = passingScores.map(score => score + 10);

// Calculate total
const totalScore = bonusScores.reduce(
    (total, score) => total + score,
    0
);

console.log("Original Scores:", scores);
console.log("Passing Scores:", passingScores);
console.log("Scores After Bonus:", bonusScores);
console.log("Total Score:", totalScore);


console.log("===== MINI CHALLENGE: STUDENT SCORE ANALYZER =====");

const students = [
    { name: "Aman", marks: 85 },
    { name: "Sara", marks: 42 },
    { name: "Riya", marks: 68 },
    { name: "John", marks: 49 }
];

// Filter students who passed
const passedStudents = students.filter(
    student => student.marks >= 50
);

// Add 5 bonus marks
const finalStudents = passedStudents.map(student => ({
    ...student,
    finalScore: student.marks + 5
}));

// Display each student's final score
finalStudents.forEach(student => {
    console.log(`${student.name}: ${student.finalScore}`);
});

// Calculate class average of passed students' final scores
const classAverage = finalStudents.reduce(
    (total, student) => total + student.finalScore,
    0
) / finalStudents.length;

console.log(`Class Average: ${classAverage}`);
