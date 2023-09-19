document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    // Evento para manejar el inicio de sesión
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener los valores del formulario de inicio de sesión
        const userEmail = document.getElementById('loginEmail').value;
        const userPassword = document.getElementById('loginPassword').value;
        if (userEmail === 'admin@123' && userPassword === '123') {
            alert('Login exitoso');
            window.location.href = 'forms.html';
        } else {
            alert('Datos incorrectos');
        }
    });
});
