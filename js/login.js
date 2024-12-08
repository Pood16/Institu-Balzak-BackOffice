let container = document.getElementById('container');

toggle = () => {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
    
    const signInForm = document.querySelector('.form.sign-in');
    const signUpForm = document.querySelector('.form.sign-up');

    if (container.classList.contains('sign-in')) {
        signInForm.classList.add('opacity-100', 'translate-x-0');
        signInForm.classList.remove('opacity-0', 'translate-x-full');
        signUpForm.classList.add('opacity-0', 'translate-x-full', 'hidden');
        signUpForm.classList.remove('opacity-100', 'translate-x-0');
    } else {
        signUpForm.classList.add('opacity-100', 'translate-x-0');
        signUpForm.classList.remove('opacity-0', 'translate-x-full', 'hidden');
        signInForm.classList.add('opacity-0', 'translate-x-full');
        signInForm.classList.remove('opacity-100', 'translate-x-0');
    }
};

let users = JSON.parse(localStorage.getItem('utilisateurs')) || [];

// Ensure admin account exists
document.addEventListener("DOMContentLoaded", function () {
    if (!users.some(user => user.username === "admin")) {
        users.push({ username: "admin", password: "admin123" });
        localStorage.setItem('utilisateurs', JSON.stringify(users));
    }

    // Redirect if already logged in
    if (sessionStorage.getItem("connected")) {
        window.location.href = 'user.html';
    }
});

// Show or hide the password field dynamically
document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordContainer = document.getElementById("password-container");

    usernameInput.addEventListener("input", function () {
        if (usernameInput.value.toLowerCase().includes("admin")) {
            passwordContainer.classList.remove("hidden"); // Show password field
        } else {
            passwordContainer.classList.add("hidden"); // Hide password field
        }
    });
});

// Function to validate if the username already exists
function usernameExists(username) {
    let users = JSON.parse(localStorage.getItem('utilisateurs')) || [];
    return users.some(user => user.username === username);
}

// Function to create a new user
function createUser(username) {
    let newUserId = `TCF${String(users.length + 1).padStart(2, '0')}`;
    let newUserProgress = {
        id: newUserId,
        username: username,
        password: password,
        currentLevel: 'A1',
        levels: {
          A1: { 
            grammar: [[], false, 1], 
            vocabulary: [[], false, 1], 
            comprehension: [[], false, 1] 
          },
          A2: { 
            grammar: [[], false, 1], 
            vocabulary: [[], false, 1], 
            comprehension: [[], false, 1] 
          },
          B1: { 
            grammar: [[], false, 1], 
            vocabulary: [[], false, 1], 
            comprehension: [[], false, 1] 
          },
          B2: { 
            grammar: [[], false, 1], 
            vocabulary: [[], false, 1], 
            comprehension: [[], false, 1] 
          },
          C1: { 
            grammar: [[], false, 1], 
            vocabulary: [[], false, 1], 
            comprehension: [[], false, 1] 
          },
          C2: { 
            grammar: [[], false, 1], 
            vocabulary: [[], false, 1], 
            comprehension: [[], false, 1]
          }
        }
    };
    users.push(newUserProgress);
    localStorage.setItem('utilisateurs', JSON.stringify(users));
    return newUserProgress;
}

// Sign Up button event listener
document.querySelector('.sign-up button').addEventListener('click', function () {
    let usernameInput = document.querySelector('.sign-up input[placeholder="Username"]');
    let passwordInput = document.querySelector('.sign-up input[placeholder="Password"]');
    let username = usernameInput.value.trim();

    let password = passwordInput ? passwordInput.value.trim() : "";

    if (username.toLowerCase().includes("admin")) {
        alert("Username cannot contain 'admin'.");
        return;
    }


    if (usernameExists(username)) {
        alert('Username already used');
    } else {
        const user = createUser(username, password);
        sessionStorage.setItem("connected", JSON.stringify(user));
        alert('User created successfully');
        usernameInput.value = ''; // Clear the input field
        if (passwordInput) passwordInput.value = ''; // Clear password field if present
        window.location.href = 'user.html'; // Redirect to user.html
    }
});

// Sign In button event listener
document.getElementById('sign-in').addEventListener('click', function () {
    let usernameInput = document.getElementById('username');
    let passwordInput = document.getElementById('password');
    let username = usernameInput.value.trim();
    let password = passwordInput ? passwordInput.value.trim() : "";
    
    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        sessionStorage.setItem("connected", JSON.stringify(user));
        if (username === "admin" && password === "admin123") {
            window.location.href = 'index.html'; // Admin redirect
        } else {
            window.location.href = 'user.html'; // Regular user redirect
        }

    } else {
        alert("Invalid username or password");
    }
});

// Logout button event listener
document.getElementById("logout").addEventListener("click", function () {
    sessionStorage.removeItem("connected");
    window.location.href = "login.html";
});
