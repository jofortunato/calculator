let primaryDisplayNumber = "";
let hasDecimalPoint = false;
const pageBody = document.querySelector("body");
const darkThemeToggle = document.querySelector("#dark-theme-input");
const keysContainer = document.querySelector("#btns-container");
const primaryDisplay = document.querySelector("#primary-display");
const secundaryDisplay = document.querySelector("#secundary-display");
const keys = document.querySelectorAll("button");

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
        writePrimaryDisplay(e.target);
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

function writePrimaryDisplay (numberButton) {
    if (primaryDisplayNumber.length >= 10) {
        return;
    }
    
    if (numberButton.value === "-") {
        if (primaryDisplayNumber.length !== 0) {
            if (primaryDisplayNumber === "0.") {
                return;
            }
            else if (primaryDisplayNumber === "-") {
                primaryDisplayNumber = "";
            }
            else {
                primaryDisplayNumber = -1*primaryDisplayNumber;
            }
        }
        else {
            primaryDisplayNumber += numberButton.value;
        }
    }
    else if (numberButton.value === ".") {
        if (hasDecimalPoint === true) {
            return;
        }
        else {
            hasDecimalPoint = true;
            disableButton(numberButton);
            if (primaryDisplayNumber.length === 0 || primaryDisplayNumber === "-") {
                primaryDisplayNumber += "0" + numberButton.value;
            }
            else {
                primaryDisplayNumber += numberButton.value;
            }
        }
    }
    else if (numberButton.value === "0" && primaryDisplayNumber === "0") {
        return;
    }
    else {
        primaryDisplayNumber += numberButton.value;
    }
    
    primaryDisplay.textContent = primaryDisplayNumber; 
}

const disableButton = button => button.classList.add("disabled");
const enableButton = button => button.classList.remove("disabled");

function clearAll() {
    primaryDisplayNumber = "";
    primaryDisplay.textContent = "";

    /* Not yet developed:
    secundaryDisplay.textContent = "";
    */

    for (let i = 0; i < keys.length; ++i) {
        enableButton(keys[i]);
    }
}