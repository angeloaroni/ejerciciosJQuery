<?php
$usuario = $_GET['usuario'];
$con = mysqli_connect("localhost","root","","empresa");
$resul = mysqli_query($con, "SELECT * FROM usuarios WHERE Nombre ='".$usuario."'");

if(mysqli_num_rows($resul)>0)
    echo "1";
else echo "0";    
?>

 