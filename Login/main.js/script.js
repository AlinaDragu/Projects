// Register
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // We check if the user already exists
    if (localStorage.getItem(username)) {
        document.getElementById('errorMessage').textContent = 'Username already exists';
        return;
    }

    // We store user data in localStorage
    const userData = {
        email: email,
        password: password
    };
    localStorage.setItem(username, JSON.stringify(userData));

    document.getElementById('successMessage').textContent = 'Registration successful! You can now login.';
    document.getElementById('errorMessage').textContent = '';
});

// Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = localStorage.getItem(username);
    if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (password === userData.password) {
            // success login
            window.location.href = 'dashboard.html';
        } else {
            document.getElementById('errorMessage').textContent = 'Invalid username or password';
        }
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
});

// disconnect
document.getElementById('logoutButton').addEventListener('click', function() {
    alert('You have been logged out.');
    window.location.href = 'login.html';
});

