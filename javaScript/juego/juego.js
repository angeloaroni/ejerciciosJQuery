//saca numero aleatorio
// var z;
// for (var i = 0; i < 10; i++) {
//     z = aleatorio(10, 20);
//     document.write(z + ", ")    
// }
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext('2d');


var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false
};
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};

fondo.imagen = new Image();//definicion de un obejeto(clase del obejto Image)
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

var cantidad = aleatorio(5, 25);
// var cerdo = new Image();
// cerdo.src = "cerdo.png";
// cerdo.addEventListener("load", cargarCerdos);

// var pollo = new Image();
// pollo.src = "pollo.png";
// pollo.addEventListener("load", cargarPollos);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos(){
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos(){
    pollo.cargaOK = true;
    dibujar();
}

function dibujar(){
    if (fondo.cargaOK == true) {
        papel.drawImage(fondo.imagen , 0, 0);    
    }

    if (vaca.cargaOK == true) {        
        console.log(cantidad);
        for(var v = 0 ; v < cantidad ; v++){              
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen , x, y );    
        }
    }
    if (cerdo.cargaOK == true) {        
        for(var v = 0 ; v < cantidad ; v++){              
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(cerdo.imagen , x, y );    
        }
    }
    if (pollo.cargaOK == true) {        
        for(var v = 0 ; v < cantidad ; v++){              
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(pollo.imagen , x, y );    
        }
    }
}
// function dibujarVacas(){
//     papel.drawImage(vaca, 10, 10);    
// }
// function dibujarCerdos(){
//     papel.drawImage(cerdo, 10, 300);    
// }
// function dibujarPollos(){
//     papel.drawImage(pollo, 300, 150);    
// }



function aleatorio(min, maxi){
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}