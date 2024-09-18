// select form by id
const loginForm = document.querySelector('#login-form');
// Handle login submit event
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect login data
    const loginForm = new FormData(event.target);
    console.log(
        loginForm.get('username'),
        loginForm.get('password')
    );
});
