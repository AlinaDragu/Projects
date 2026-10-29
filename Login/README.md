# MonkeyFlow – Login & Sign-up

A small Instagram-style social app with real user accounts. The front end is plain HTML/CSS/JavaScript. The back end is a Python **Flask** API that stores users in **MongoDB**, with passwords hashed using **bcrypt**.

## Features

- **Sign up** – create an account with email, username and password
- **Log in** – checks the username and hashed password against MongoDB
- **Dashboard** – an Instagram-like feed with sample posts (likes, comments, save, comment box)
- **Navigation bar** – Home, Profile, Explore, Messages, Notifications
- **Log out** – from the Profile page
- The dashboard redirects to the login page if you are not logged in

## Pages

| File | What it is |
|---|---|
| `signup.html` | Registration form |
| `login.html` / `index.html` | Login form (the two files are identical) |
| `dashboard.html` | Feed with sample posts |
| `profile.html` | Profile page with the Logout button |
| `explore.html`, `messages.html`, `notifications.html` | Empty, not built yet |
| `main.js/script.js` | All front-end logic: forms, `fetch` calls to the API, navigation |
| `main.css/style.css` | Styles for every page |
| `setup_db.py` | Flask API + MongoDB connection |
| `main.js/playground-1.mongodb.js` | MongoDB playground from the VS Code extension (scratch file) |

## API

The Flask server runs on `http://127.0.0.1:5000`.

| Method | Route | Body | Response |
|---|---|---|---|
| `POST` | `/signup` | `{ username, email, password }` | `201` created · `409` user already exists |
| `POST` | `/login` | `{ username, password }` | `200` success · `401` wrong username or password |
| `POST` | `/logout` | – | `200` logged out (requires a logged-in session) |

## How it works

1. `signup.html` sends the form to `POST /signup`. The server hashes the password with bcrypt and saves the user in the `mydatabase.login` collection, then the browser goes to the login page.
2. `login.html` sends the form to `POST /login`. If the password matches, the browser stores `isLoggedIn` in `localStorage` and opens `dashboard.html`.
3. The Logout button removes `isLoggedIn` and goes back to the login page.

## How to run

You need **Python 3** and a **MongoDB** database (for example a free MongoDB Atlas cluster).

1. Install the Python packages:

   ```bash
   pip install flask flask-cors flask-login pymongo bcrypt
   ```

2. In `setup_db.py`, set `uri` to your MongoDB connection string.

3. Start the API:

   ```bash
   python setup_db.py
   ```

   You should see `Pinged your deployment. You successfully connected to MongoDB!`

4. Open `signup.html` with the VS Code **Live Server** extension (the repo is set to port `5501`), create an account, then log in.

> ⚠️ Never commit a real database password. Keep the connection string out of the code, for example in an environment variable.

## Ideas for improvement

- Build the Explore, Messages and Notifications pages
- Load real posts from the database instead of the sample ones
- Read the MongoDB connection string and Flask secret key from environment variables
- Protect every page, not just the dashboard
