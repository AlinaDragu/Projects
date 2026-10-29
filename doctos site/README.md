# Doctos Website

A one-page landing site for **Doctos** (*Doctors Optimized Service*), a product that offers AI-based documentation and billing for dentists. The site content is in German.

## Sections

- **Header** – Doctos logo and navigation (Home, Team, Kontakt, Partners)
- **Hero** – slogan *"Doctos – mehr Zeit für den Patienten"* and an embedded YouTube video of the app
- **Features** – three text blocks that appear one by one as you scroll
- **Das Team** – team member cards
- **Partners** – partner cards
- **Kontakt** – company address, email, phone and an embedded Google Map

Some texts and photos are still placeholders (*Lorem ipsum*).

## Animations

- **Header logo swap** – after scrolling 50px, the "DOCTOS" wordmark slides out and the logo icon slides in (`scroll` event in `script.js`)
- **Reveal on scroll** – an `IntersectionObserver` adds animation classes to the feature blocks and images when they come into view
- **CSS keyframes** – `slideFromTop`, `slideFromLeft`, `iframeAppear` and more in `main.css`

## Files

| | |
|---|---|
| `index.html` | Page structure |
| `main.css` | Layout, colors, keyframe animations |
| `script.js` | Scroll logic and `IntersectionObserver` |
| `assets/` | Logo SVGs and images |

## How to run

Open `index.html` in your browser. You need an internet connection for the video, the map and Google Fonts (Montserrat, Roboto).
