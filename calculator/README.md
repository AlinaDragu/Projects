# Calculator

A simple browser calculator built with plain HTML, CSS and JavaScript.

## Features

- Digits `0–9` and decimal numbers
- Addition, subtraction, multiplication and division
- `AC` button to clear everything
- `=` evaluates the whole expression typed so far (e.g. `2+3*4`)
- Blocks two operators in a row (e.g. `5+*`)

## Tech

| | |
|---|---|
| `index.html` | Calculator layout: display + button grid |
| `main.css` | Centered black card, rounded buttons, purple `AC` and hover color |
| `main.js` | A `calculator` object that collects input, updates the screen and evaluates the expression |

The buttons share a single click listener on `.calculator-buttons` (event delegation), and each button's `value` attribute tells the calculator what was pressed.

## How to run

Open `index.html` in your browser. No installation needed.

## Ideas for improvement

- After pressing `=`, continue the next calculation from the result
- Prevent two decimal points in the same number
- Replace `Function("return " + equation)` with a small parser, so arbitrary code can never be evaluated
- Keyboard support
