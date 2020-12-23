let primaryDisplayNumber = "";
const maxPrimaryDisplayLength = 10;
let hasDecimalPoint = false;
let result = undefined;
let operator = undefined;

const pageBody = document.querySelector("body");
const darkThemeToggle = document.querySelector("#dark-theme-input");
const keysContainer = document.querySelector("#btns-container");
const primaryDisplay = document.querySelector("#primary-display");
const secundaryDisplay = document.querySelector("#secundary-display");
const keys = document.querySelectorAll("button");
const decimalButton = document.querySelector("#decimal");

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
        if (result !== undefined && operator === undefined) {
            result = undefined;
            resetUI();
        }
        else if (primaryDisplayNumber === "ERROR")
        {
            resetUI();
        }
        writePrimaryDisplay(e.target);
    }
    else if (e.target.classList.contains("operators")) {
        if (result === undefined && operator === undefined && primaryDisplayNumber !== "ERROR") {
            operator = e.target.value;
            result = parseFloat(primaryDisplayNumber);
            resetUI();
        }
        else if (result !== undefined && operator === undefined){
            operator = e.target.value;
        }
        else if (result !== undefined && operator !== undefined) {
            result = operate(result,parseFloat(primaryDisplayNumber),operator);
            operator = e.target.value;
            resetUI();
            primaryDisplay.textContent = result;
            errorHandling(result);
        }        
    }
    else if (e.target.id === "equal") {
        if (result !== undefined && operator !== undefined) {
            result = operate(result,parseFloat(primaryDisplayNumber),operator);
            resetUI();
            primaryDisplay.textContent = result;
            operator = undefined;
            errorHandling(result);
        }
    }
    else if (e.target.id === "clear-all") {
        clearAll();
    }
    else if (e.target.classList.contains("backspace")) {
        backspace();
    }
}, false);

const add = (number1, number2) => number1 + number2;
const subtract = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const divide = (numerator, denominator) => numerator/denominator;

function operate(number1, number2, operator) {
    if (typeof(number1) !== "number" || typeof(number2) !== "number") {
        return undefined;
    }

    let operationResult = undefined;

    switch (operator) {
        case "+":
            operationResult = add(number1,number2);
            break;
        case "-":
            operationResult = subtract(number1, number2);
            break;
        case "*":
            operationResult = multiply(number1, number2);
            break;
        case "/":
            operationResult = divide(number1, number2);
            break;
        default:
            return undefined;
    }

    return parseFloat(operationResult.toPrecision(maxPrimaryDisplayLength));
}

function writePrimaryDisplay (numberButton) {
    if (primaryDisplayNumber.length >= maxPrimaryDisplayLength) {
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
                primaryDisplayNumber = (-1*primaryDisplayNumber).toString();
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

function resetUI() {
    primaryDisplayNumber = "";
    hasDecimalPoint = false;
    primaryDisplay.textContent = "";

    /* Not yet developed:
    secundaryDisplay.textContent = "";
    */

    for (let i = 0; i < keys.length; ++i) {
        enableButton(keys[i]);
    }
}

function clearAll() {
    resetUI();
    result = undefined;
    operator = undefined;
}

function backspace () {
    if (primaryDisplayNumber.slice(-1) === ".") {
        hasDecimalPoint = false;
        enableButton(decimalButton);
    }
    primaryDisplayNumber = primaryDisplayNumber.slice(0, -1);
    primaryDisplay.textContent = primaryDisplayNumber;
}

function errorHandling(result) {
    if (result === Infinity || result === NaN) {
        clearAll();
        primaryDisplayNumber = "ERROR"
        primaryDisplay.textContent = "ERROR";
    }
}