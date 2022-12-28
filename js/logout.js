function cerrar(){
    //localStorage.clear()
    firebase.auth().signOut()
    .then(function() {
        console.log('...saliendo')
        window.location='./index.html'
    })
    .catch(function(error) {
        console.log(error)
    })
}