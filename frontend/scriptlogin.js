const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// frontend/scriptlogin.js
document.querySelector('.sign-up form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.querySelector('.sign-up input[name="name"]').value;
    const email = document.querySelector('.sign-up input[name="email"]').value;
    const password = document.querySelector('.sign-up input[name="password"]').value;

    const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message);
    } else {
        alert(`Error: ${data.message}`);
    }
});

document.querySelector('.sign-in form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.querySelector('.sign-in input[name="email"]').value;
    const password = document.querySelector('.sign-in input[name="password"]').value;

    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message);
        // Redirect to home.html after successful login
        window.location.href = "home.html";
    } else {
        alert(`Error: ${data.message}`);
    }
});


