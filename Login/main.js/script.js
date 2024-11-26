document.addEventListener('DOMContentLoaded', function() {
    // Register
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const data = {
                username: username,
                email: email,
                password: password
            };

            fetch('http://127.0.0.1:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error(err.message);
                    });
                }
                return response.json();
            }) 
            .then(data => {
                document.getElementById('successMessage').textContent = data.message;
                document.getElementById('errorMessage').textContent = '';
                if (data.message === "User created successfully") {
                    window.location.href = 'login.html';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                document.getElementById('errorMessage').textContent = error.message;
            });
        });
    }

    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const data = {
                username: username,
                password: password
            };

            fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error(err.message);
                    });
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('errorMessage').textContent = '';
                alert(data.message);
                if (data.message === "Login successful") {
                    localStorage.setItem('isLoggedIn', 'true');
                    window.location.href = 'dashboard.html';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                document.getElementById('errorMessage').textContent = error.message;
            });
        });
    }

    // Logout
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html';
        });
    }

    // Button navigation
    const homeButton = document.getElementById('homeButton');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            window.location.href = 'dashboard.html';
        });
    }

    const profileButton = document.getElementById('profileButton');
    if (profileButton) {
        profileButton.addEventListener('click', function() {
            window.location.href = 'profile.html';
        });
    }

    const exploreButton = document.getElementById('exploreButton');
    if (exploreButton) {
        exploreButton.addEventListener('click', function() {
            window.location.href = 'explore.html';
        });
    }

    const messagesButton = document.getElementById('messagesButton');
    if (messagesButton) {
        messagesButton.addEventListener('click', function() {
            window.location.href = 'messages.html';
        });
    }

    const notificationsButton = document.getElementById('notificationsButton');
    if (notificationsButton) {
        notificationsButton.addEventListener('click', function() {
            window.location.href = 'notifications.html';
        });
    }

    // Existing logic to redirect to login page if not logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname.endsWith('dashboard.html')) {
        window.location.href = 'login.html';
    }
});