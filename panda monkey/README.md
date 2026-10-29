# Panda and Monkey

A small animation exercise: when the page loads, a panda slides into place, and one second later a monkey follows.

## How it works

- Both images are absolutely positioned inside a `.container`.
- CSS gives them `transition: all 1s ease`, so any position change is animated.
- On `window.onload`, `movePanda()` changes the panda's `right` position. After 1 second (`setTimeout`), `moveMonkey()` changes the monkey's `left` position.

## Files

| | |
|---|---|
| `index.html` | The two images |
| `main.css` | Positioning and the transition |
| `main.js` | Starts the animations in order |
| `assets/` | `panda.jpg` and `monkey.jpg` |

## How to run

Open `index.html` in your browser. The animation starts on its own.
