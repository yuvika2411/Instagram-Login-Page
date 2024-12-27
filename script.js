document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;
        
        if (username && password) {
            alert(`Login attempted with username: ${username}`);
        } else {
            alert('Please enter both username and password.');
        }
    });
});