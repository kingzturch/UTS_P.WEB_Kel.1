document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Contoh validasi sederhana, ganti dengan logika autentikasi yang sesuai
    if (username === 'admin' && password === 'password') {
        // Redirect ke halaman game setelah login sukses
        window.location.href = 'game.html';
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password.';
    }
});

