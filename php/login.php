<?php

include('conexion.php');

$correo = $_POST["user_email"];
$pass 	= $_POST["password"];


$queryusuario = $conn->prepare("SELECT * FROM login WHERE correo ='$correo' and pass = '$pass'");
$queryusuario->execute();
$queryusuario->store_result();
$nr = $queryusuario->num_rows;  
	
if ($nr == 1)  
{ 
    echo	"<script> alert('Usuario logueado.');</script>";
    session_start();
    $_SESSION["user_email"]=$correo;
    header("Location: ../main.php");
}
else
{
    echo "<script> alert('Usuario o contraseña incorrecto.');window.location= '../index.html' </script>";
}
$queryusuario->close();
$conn->close();
$correo=null;
$pass=null;
?>
