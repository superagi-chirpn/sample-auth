document.getElementById('signup-form').addEventListener('submit', function(event) {
event.preventDefault();
let email = document.getElementById('email').value;
let fullname = document.getElementById('fullname').value;
let phone = document.getElementById('phone').value;
let password = document.getElementById('password').value;
console.log(`Email: ${email}, Full Name: ${fullname}, Phone: ${phone}, Password: ${password}`);
});
document.getElementById('login-form').addEventListener('submit', function(event) {
event.preventDefault();
let email = document.getElementById('login-email').value;
let password = document.getElementById('login-password').value;
console.log(`Email: ${email}, Password: ${password}`);
});