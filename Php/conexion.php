
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
    try {
        $conexion = new PDO("mysql:host=localhost;dbname=empresa","root","");
        $conexion->exec("SET CHARACTER SET utf8");
        $sql="select * from usuarios";
        $resultado=$conexion->prepare($sql);
        $resultado->execute();

        while($registro=$resultado->fetch(PDO::FETCH_ASSOC)){
            echo "cod: ". $registro['ID']."<br>";
            echo "Nombre: ". $registro['Nombre']."<br>";
        }
        $resultado->closeCursor();

    } catch (Exception $e) {
        die('Error: '. $e->GetMessage());        
    } finally {
        //vacia la memeria dspues de la instruccion
        $base = null;
    }

    


?>    
</body>
</html>