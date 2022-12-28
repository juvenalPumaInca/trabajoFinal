var signinForm = document.getElementById('form-signin');

signinForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')

    var datos = new FormData(signinForm);

    console.log(datos);
    console.log(datos.get('user_email'));
    console.log(datos.get('password'));
    var email = datos.get('user_email');
    var password = datos.get('password');
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.location='./index.html'
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
            errorSign(errorCode);
        });
});

function errorSign(errorCode){
    if(errorCode=='auth/weak-password'){
        var contenido = document.getElementById('respuesta');
        contenido.innerHTML=`
        <div class="alert alert-danger" role="alert">
            la contraseña debe tener mas de 6 caracteres
        </div>
        `
    }else{
        var contenido = document.getElementById('respuesta');
        contenido.innerHTML=`
        <div class="alert alert-danger" role="alert">
            El usuario ya existe
        </div>
        `
    }
}