let primaryDisplayNumber = "";
let hasDecimalPoint = false;
const pageBody = document.querySelector("body");
const darkThemeToggle = document.querySelector("#dark-theme-input");
const keysContainer = document.querySelector("#btns-container");
const primaryDisplay = document.querySelector("#primary-display");

let isOnDarkTheme = false;
darkThemeToggle.addEventListener("click", () => {
    if (!isOnDarkTheme) {
        isOnDarkTheme = true;
        pageBody.classList.add("dark-theme");
    }
    else {
        isOnDarkTheme = false;
        pageBody.classList.remove("dark-theme");
    }

}, false);

keysContainer.addEventListener("click", e => {
    if (e.target.classList.contains("number-keys")) {
        writePrimaryDisplay(e.target.value);
    }
}, false);

const add = (number1, number2) => number1 + number2;
const subtract = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const divide = (numerator, denominator) => numerator/denominator;

function operate(number1, number2, operator) {
    if (typeof(number1) !== "number" || typeof(number2) !== "number") {
        return undefined
    }
    switch (operator) {
        case "+":
            return add(number1,number2)
        case "-":
            return subtract(number1, number2)
        case "*":
            return multiply(number1, number2)
        case "/":
            return divide(number1, number2)
        default:
            return undefined
    }
}

function writePrimaryDisplay (char) {
    if (primaryDisplayNumber.length >= 10) {
        return;
    }
    else if (char === "-" && primaryDisplayNumber.length !== 0) {
        return;
    }
    else if (char === "." && hasDecimalPoint === true) {
        return;
    }
    else if (char === "." && hasDecimalPoint === false) {
        hasDecimalPoint = true;
        if (primaryDisplayNumber.length === 0 || primaryDisplayNumber === "-") {
            primaryDisplayNumber += "0" + char;
        }
        else {
            primaryDisplayNumber += char;
        }
        
    }
    else {
        primaryDisplayNumber += char;
    }
    
    primaryDisplay.textContent = primaryDisplayNumber; 
}