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
    document.getElementById('logoutButton').addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    // Button navigation
    document.getElementById('homeBtn').addEventListener('click', function() {
        window.location.href = 'dashboard.html';
    });

    document.getElementById('profileBtn').addEventListener('click', function() {
        window.location.href = 'profile.html';
    });

    document.getElementById('exploreBtn').addEventListener('click', function() {
        window.location.href = 'explore.html';
    });

    document.getElementById('messagesBtn').addEventListener('click', function() {
        window.location.href = 'messages.html';
    });

    document.getElementById('notificationsBtn').addEventListener('click', function() {
        window.location.href = 'notifications.html';
    });



    // Existing logic to redirect to login page if not logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname.endsWith('dashboard.html')) {
        window.location.href = 'login.html';
    }
});