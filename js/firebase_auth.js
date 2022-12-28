var loginForm = document.getElementById('form-login');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')

    var datos = new FormData(loginForm);

    console.log(datos);
    console.log(datos.get('user_email'));
    console.log(datos.get('password'));
    var email = datos.get('user_email');
    var password = datos.get('password');
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            loginForm.reset();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('ingreso incorrecto');
            errorLogin();
        });
});

function observador(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('exite usuario')
            window.location='./main.html'
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            // ...
        } else {
            console.log('no exite usuario')
            // User is signed out
            // ...
        }
    });
}
observador();

function errorLogin(){
    var contenido = document.getElementById('respuesta');
    contenido.innerHTML=`
    <div class="alert alert-danger" role="alert">
        Error: su usuario o contraseña son incorrectos
    </div>
    `
}