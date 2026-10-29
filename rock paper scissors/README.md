# Rock Paper Scissors

The classic game, played against the computer in the browser.

## How it works

1. Click **Rock**, **Paper** or **Scissors**.
2. The computer picks a random move.
3. The result appears under the buttons, e.g. `You🙈 rock. PC🐼 scissors. Youuuu  Woooooonnnn!`

Rock beats scissors, scissors beat paper, paper beats rock. Same move on both sides is a draw.

## Tech

- **HTML** – title, three buttons and a result paragraph
- **CSS** – centered column layout with blue rounded buttons
- **JavaScript**
  - `computerChoice()` picks a random move with `Math.random()`
  - `determineWinner()` compares the two moves
  - `playGame()` shows the result on the page

## How to run

Open `index.html` in your browser.

## Ideas for improvement

- Keep score across rounds
- Add "best of 3 / best of 5" mode
- Show icons or images for each move
