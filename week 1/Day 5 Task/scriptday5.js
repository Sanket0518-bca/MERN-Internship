/* =====================================================
   TASK 1 - INTERACTIVE BUTTONS
===================================================== */


// Select paragraph

const demoText = document.getElementById("demoText");


// -------------------------------
// Change Text Color
// -------------------------------

const redBtn = document.getElementById("redBtn");

const greenBtn = document.getElementById("greenBtn");

const blueBtn = document.getElementById("blueBtn");


redBtn.addEventListener("click", function () {

    demoText.style.color = "red";

});


greenBtn.addEventListener("click", function () {

    demoText.style.color = "green";

});


blueBtn.addEventListener("click", function () {

    demoText.style.color = "blue";

});


// -------------------------------
// Change Font Family
// -------------------------------

const fontSelect = document.getElementById("fontSelect");


fontSelect.addEventListener("change", function () {

    demoText.style.fontFamily = this.value;

});


// -------------------------------
// Change Font Size
// -------------------------------

const increaseBtn = document.getElementById("increaseBtn");

const decreaseBtn = document.getElementById("decreaseBtn");


// Starting font size

let fontSize = 20;


demoText.style.fontSize = fontSize + "px";


// Increase size

increaseBtn.addEventListener("click", function () {

    fontSize += 2;

    demoText.style.fontSize = fontSize + "px";

});


// Decrease size

decreaseBtn.addEventListener("click", function () {

    if (fontSize > 10) {

        fontSize -= 2;

        demoText.style.fontSize = fontSize + "px";

    }

});


// -------------------------------
// Bold / Italic / Underline
// On Mouseover
// -------------------------------

const styleText = document.getElementById("styleText");


styleText.addEventListener("mouseover", function () {

    styleText.style.fontWeight = "bold";

    styleText.style.fontStyle = "italic";

    styleText.style.textDecoration = "underline";

});


styleText.addEventListener("mouseout", function () {

    styleText.style.fontWeight = "normal";

    styleText.style.fontStyle = "normal";

    styleText.style.textDecoration = "none";

});



/* =====================================================
   TASK 2 - SIMPLE FORM VALIDATION
===================================================== */


const myForm = document.getElementById("myForm");


myForm.addEventListener("submit", function (event) {

    // Stop page refresh

    event.preventDefault();


    // Get input values

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const mobile = document.getElementById("mobile").value.trim();


    // Error elements

    const nameError = document.getElementById("nameError");

    const emailError = document.getElementById("emailError");

    const mobileError = document.getElementById("mobileError");

    const successMessage =
        document.getElementById("successMessage");


    // Clear previous messages

    nameError.textContent = "";

    emailError.textContent = "";

    mobileError.textContent = "";

    successMessage.textContent = "";


    let isValid = true;


    // -------------------------------
    // Name Validation
    // -------------------------------

    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;

    }


    // -------------------------------
    // Email Validation
    // -------------------------------

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    }


    // -------------------------------
    // Mobile Validation
    // -------------------------------

    if (mobile === "") {

        mobileError.textContent =
            "Please enter your mobile number.";

        isValid = false;

    }


    // -------------------------------
    // Final Result
    // -------------------------------

    if (isValid) {

        successMessage.textContent =
            "Form submitted successfully!";

        myForm.reset();

    }

});



/* =====================================================
   TASK 3 - SIMPLE CALCULATOR
===================================================== */


// Get elements

const num1 = document.getElementById("num1");

const num2 = document.getElementById("num2");

const calculatorResult =
    document.getElementById("calculatorResult");


// Buttons

const addBtn = document.getElementById("addBtn");

const subtractBtn =
    document.getElementById("subtractBtn");

const multiplyBtn =
    document.getElementById("multiplyBtn");

const divideBtn =
    document.getElementById("divideBtn");


// -------------------------------
// Get Numbers
// -------------------------------

function getNumbers() {

    const firstNumber = num1.value;

    const secondNumber = num2.value;


    // Validate empty fields

    if (firstNumber === "" || secondNumber === "") {

        calculatorResult.textContent =
            "Please enter both numbers.";

        return null;

    }


    return {

        first: Number(firstNumber),

        second: Number(secondNumber)

    };

}


// -------------------------------
// Addition
// -------------------------------

addBtn.addEventListener("click", function () {

    const numbers = getNumbers();


    if (numbers === null) {
        return;
    }


    const result =
        numbers.first + numbers.second;


    calculatorResult.textContent =
        "Result: " + result;

});


// -------------------------------
// Subtraction
// -------------------------------

subtractBtn.addEventListener("click", function () {

    const numbers = getNumbers();


    if (numbers === null) {
        return;
    }


    const result =
        numbers.first - numbers.second;


    calculatorResult.textContent =
        "Result: " + result;

});


// -------------------------------
// Multiplication
// -------------------------------

multiplyBtn.addEventListener("click", function () {

    const numbers = getNumbers();


    if (numbers === null) {
        return;
    }


    const result =
        numbers.first * numbers.second;


    calculatorResult.textContent =
        "Result: " + result;

});


// -------------------------------
// Division
// -------------------------------

divideBtn.addEventListener("click", function () {

    const numbers = getNumbers();


    if (numbers === null) {
        return;
    }


    if (numbers.second === 0) {

        calculatorResult.textContent =
            "Cannot divide by zero.";

        return;

    }


    const result =
        numbers.first / numbers.second;


    calculatorResult.textContent =
        "Result: " + result;

});



/* =====================================================
   BONUS CHALLENGE - LIGHT / DARK MODE
===================================================== */


const lightBtn = document.getElementById("lightBtn");

const darkBtn = document.getElementById("darkBtn");

const lightBtn2 = document.getElementById("lightBtn2");

const darkBtn2 = document.getElementById("darkBtn2");


// -------------------------------
// Light Mode Function
// -------------------------------

function enableLightMode() {

    document.body.classList.remove("dark");

}


// -------------------------------
// Dark Mode Function
// -------------------------------

function enableDarkMode() {

    document.body.classList.add("dark");

}


// First Light Button

lightBtn.addEventListener(
    "click",
    enableLightMode
);


// First Dark Button

darkBtn.addEventListener(
    "click",
    enableDarkMode
);


// Second Light Button

lightBtn2.addEventListener(
    "click",
    enableLightMode
);


// Second Dark Button

darkBtn2.addEventListener(
    "click",
    enableDarkMode
);