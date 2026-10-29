# Styles Conference

A multi-page website for a fictional web design conference in Chicago. I built it while following Shay Howe's [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/) course, which uses this site as its running project.

## Pages

| File | Page |
|---|---|
| `index.html` | Home: hero with *Register Now* button and three teasers (Speakers, Schedule, Venue) |
| `speakers.html` | Speaker list with talk titles and bios |
| `schedule.html` | Workshop day schedule in a table, with times and talks linked to the speakers |
| `venue.html` | The Chicago Theatre and the partner hotel |
| `register.html` | *Why attend?* list and a registration form |

## What I practiced

- Semantic HTML: `header`, `nav`, `section`, `footer`
- A CSS reset (Eric Meyer's) and a shared stylesheet for every page
- A simple grid system with column classes (`col-1-3`, `col-2-3`)
- Reusable components: buttons (`.btn`, `.btn-alt`), header, navigation, footer
- Tables with `thead`, `tbody`, `th scope` and `<time>`
- Forms: text and email inputs, labels, `fieldset`

## Files

| | |
|---|---|
| `*.html` | The five pages |
| `assets/stylesheets/main.css` | All styles |
| `assets/images/home/` | Teaser images for the home page |

## How to run

Open `index.html` in your browser and use the navigation to move between pages. The registration form doesn't send data anywhere.
