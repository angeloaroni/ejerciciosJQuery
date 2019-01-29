<?php
$personas=array(
    'usuario 1:'=>array('nombre'=>"MAteo",'apellido'=>"Aroni",'edad'=>2),
    'usuario 2:'=>array('nombre'=>"ANgelo",'apellido'=>"Aroni",'edad'=>2),
    'usuario 3:'=>array('nombre'=>"Mabe",'apellido'=>"Torres",'edad'=>2),
    'usuario 4:'=>array('nombre'=>"Paco",'apellido'=>"Lalo",'edad'=>2)
);

$coches=array("audi","bwn","ford","kia");

//optenemos un valor
$fila=3;
$columna='nombre';
//echo $personas[$fila][$columna];

//recorremos array multidimencioanal
//bucle for para recorrer array
echo 'bucle for para array normal </br>';
for($i =0 ; $i < sizeof($coches); $i++)
    echo $coches[$i],'<br/>';

echo '</br>bucle forech para array multidimensionales </br>';    
foreach ($personas as $usuario => $valor) {
    echo '<strong>'.$usuario.'</strong><br>';
    foreach($valor as $contenido){
        echo $contenido.'<br>';
    }
}



?>
