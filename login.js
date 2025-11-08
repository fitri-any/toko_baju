document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Ganti dengan username dan password yang diinginkan
    if (username === 'admin' && password === '12345') {
        // Langsung pindah ke halaman utama tanpa alert
        window.location.href = 'halaman utama.html'; // Ganti dengan nama file halaman utama
    } else {
        alert('Username atau password salah!');
    }
});
