# Calculator - Use it [HERE](https://jofortunato.github.io/calculator/)

An on-screen calculator using JavaScript, HTML, and CSS.
These are the main features the app must have:

- For security reasons, the eval() functions shall not be used;
- The calculater must be able to perform add, subtract, divide and multiply operations;
- Should not evaluate more than a single pair of numbers at a time. If you enter a number then an operator and another number that calculation should be displayed if your next input is an operator. The result of the calculation should be used as the first number in your new calculation;

## Current Status:

Calculator is working properly.

## Motivation

Some months ago I've developed a command-line based [calculator](https://github.com/jofortunato/calc) (including expressions with parentheses) using Python. This time, although being a simpler calculator, it is a web-based calculator using HTML, CSS, and Javascript.
This part of the [The Odin Project](https://www.theodinproject.com/) foundations course.

## Development

### To-do:

- [x] UI development - clean, modern and fresh UI;
- [x] Add dark theme;
- [x] Create the add(), subtract(), multiply() and divide() functions with Javascript;
- [x] Create an operate() function - takes two numbers and calls the correct above function to get the result;
- [x] Create the functions that populate the primary display when the number buttons are clicked. The ‘display value’ should be stored in a variable somewhere for use in the next step;
- [x] When the user presses the “=” key or an operator key, the operate() function must be called and the result printed to the primary display;
- [x] Create the clear() function - must clean the displays and delete all stored values;
- [x] Add a "." button and let users input decimals. Don’t let users type more than one: disable the decimal button if there’s already one in the display;
- [x] Add a “backspace” button, so the user can undo if they click the wrong number.
- [x] Add secundary view with history of the current calculation.
- [x] Add keyboard support.

## Bugs, Advices and Lessons Learned

I am sure you have some kind of advice to make related to my app. Please, feel free to open an issue [here](https://github.com/jofortunato/etch-a-sketch/issues/new).
All comments, lessons, bug reports I receive make me happy. They are a great oportunity to be a better developer.

To fix a bug, follow these steps:

- Fork the repo
- Create a new branch (git checkout -b improve-feature)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (git commit -am 'Improve feature')
- Push to the branch (git push origin improve-feature)
- Create a Pull Request
