
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

setTimeout(() => {
	container.classList.add('sign-in');
}, 200);


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
document.querySelector('.sign-up button').addEventListener('click', function() {
    let usernameInput = document.querySelector('.sign-up input[placeholder="Username"]');
    let username = usernameInput.value.trim();
    
    if (usernameExists(username)) {
        alert('Username already used');
    } else {
        const user = createUser(username);
        sessionStorage.setItem("connected",JSON.stringify(user));
        alert('User created successfully');
        usernameInput.value = ''; // Clear the input field
        window.location.href = 'user.html'; // Redirect to user.html
    }
});

// Sign In button event listener
document.getElementById('sign-in').addEventListener('click', function() {
    let usernameInput = document.getElementById('username');
    let username = usernameInput.value.trim();

    if (usernameExists(username)) {
        // console.log(usernameExists(username));
        let connected = users.find( (user) => user.username == username );
        sessionStorage.setItem("connected",JSON.stringify(connected));
        window.location.href = 'user.html';
    } else {
        alert('User not found');
    }
});

document.addEventListener("DOMContentLoaded",function(){
    if(sessionStorage.getItem("connected")){
        window.location.href = 'user.html'
    }
})