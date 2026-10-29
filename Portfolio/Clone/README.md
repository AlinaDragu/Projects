# Instagram Clone

A static copy of the Instagram home feed, built with HTML, CSS and vanilla JavaScript. I made it to test myself on a more complex, responsive layout.

![Instagram Clone screenshot](../AlinaDragu-Website/images/instagram%20clone.png)

## Features

- **Light / dark theme** – the moon/sun button switches the theme, and your choice is remembered in `localStorage`
- **Stories bar** – a row of stories that scrolls left and right with arrow buttons
- **Posts with carousels** – posts with several photos get left/right arrows and dot indicators, and the active dot follows the photo you're on
- **Responsive layout** – separate header buttons and a bottom navbar on mobile, and the full layout from 1024px up
- **Smart arrows** – on desktop, `IntersectionObserver` hides the left arrow on the first item and the right arrow on the last one

## Files

| | |
|---|---|
| `index.html` | Header, stories and 5 posts |
| `main.css` | Layout, light/dark theme colors, media queries |
| `main.js` | Theme toggle, stories scrolling, post carousels |
| `assets/` | Logo, favicon, default avatar and SVG icons |

## How to run

Open `index.html` in your browser. It's front end only: likes, comments and buttons are for show.
