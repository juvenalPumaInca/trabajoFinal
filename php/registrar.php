<?php
//Para registrar
include('conexion.php');

$correo = $_POST["user_email"];
$pass 	= $_POST["password"];
$usu 	= $_POST["user"];

$queryusuario = $conn->prepare("SELECT * FROM login WHERE correo = '$correo'");
$queryusuario->execute();
$queryusuario->store_result();
$nr = $queryusuario->num_rows; 

if ($nr == 0)
{
    $queryusuario->close();
	$queryregistrar = "INSERT INTO login(correo, pass, usu) values ('$correo','$pass','$usu')";

    if($conn->query($queryregistrar))
    {
        echo "<script> alert('Usuario registrado: $usu,$nr');window.location= '../index.html' </script>";
        $queryregistrar->close();
    }
    else 
    {
        echo "Error: " .$queryregistrar."<br>".mysql_error($conn);
        $queryregistrar->close();
    }

}
else
{
	echo "<script> alert('No puedes registrar este correo: $correo');window.location= '../index.html' </script>";
    $queryusuario->close();
}
$conn->close();
?>