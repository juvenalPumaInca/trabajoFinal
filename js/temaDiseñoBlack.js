
var temaBlack = true;
miStorage = window.localStorage;
localStorage.setItem("tema", true);
console.log(temaBlack);
function temaDiseñoBlack() {
    if (temaBlack) {
        document.getElementsByTagName("body")[0].style.background = "linear-gradient(rgba(2, 2, 2 ),rgba(21, 2, 37  ))";
        document.getElementsByClassName("title-main")[0].style.color = "white";
        document.getElementsByClassName("title-main")[0].style.textShadow = "5px 5px 5px rgb(21, 7, 72)";
        document.getElementById("todolist-").style.color = "white";


        document.getElementById("button-Login").style.background = "linear-gradient(rgba(58, 58, 59 ), rgba(0, 0, 0))";

        localStorage.setItem("tema", false);
        console.log("false");
        temaBlack = false;
    } else {
        document.getElementsByTagName("body")[0].style.background = "linear-gradient(rgba(104, 234, 204),rgba(73, 123, 232))";
        document.getElementsByClassName("title-main")[0].style.textShadow = "5px 5px 5px rgb(12, 137, 172)";
        document.getElementsByClassName("title-main")[0].style.color = "rgb(179, 240, 237)";
        document.getElementById("todolist-").style.color = " rgb(176, 22, 214)";

        document.getElementById("button-Login").style.background = "linear-gradient(rgb(185, 13, 228),rgb(141, 2, 168))";

        localStorage.setItem("tema", true);
        console.log("true");
        temaBlack = true;
    }

}


function abrirRegistro() {
    window.location = "./signin.html";
}