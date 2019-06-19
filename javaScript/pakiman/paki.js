//declaracion de array asociativo
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";


//damos valor a cada objeto
// var cauchin = new Pakiman("Cauchin", 100, 30);
// var pokacho = new Pakiman("Pokacho", 80, 50);
// var tocinauro = new Pakiman("Tocinauro", 120, 40);
//console.log(cauchin, pokacho, tocinauro);

//creamos un array y añdimos
var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var pakin of coleccion){
    pakin.mostrar();
}

// pokacho.mostrar();
// cauchin.mostrar();
// tocinauro.mostrar();