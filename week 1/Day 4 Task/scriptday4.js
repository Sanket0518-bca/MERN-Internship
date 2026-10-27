// Task 1
// Normal Parameterized Function

function rectangleArea(length, width) {

    let area = length * width;

    return area;

}



let result = rectangleArea(10, 5);

console.log("Rectangle Area:", result);





const checkVote = (age) => {

    if (age >= 18) {

        return "You are eligible to vote.";

    } else {

        return "You are not eligible to vote.";

    }

};


console.log(checkVote(18));





function showName() {

    let userName = prompt("Enter your name:");

    if (userName && userName.trim() !== "") {

        document.getElementById("welcomeMessage").innerText =
            "Welcome, " + userName + " 👋";

    } else {

        document.getElementById("welcomeMessage").innerText =
            "Welcome, Guest!";

    }

}