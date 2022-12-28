var authGoogle = document.getElementById('googleAccess');

authGoogle.addEventListener('click', function(e){
    e.preventDefault();
    console.log('me diste un click')

    var provider = new firebase.auth.GoogleAuthProvider();
    //provider.addScope('https://www.googleapis.com/auth/cloud-platform');
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('Login con Google correcto')
            window.location='./main.html'
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log('Error de acceso')
            console.log(errorMessage)
            console.log(errorCode)
            console.log(email)
            console.log(credential)
            console.log(error)
        });
});