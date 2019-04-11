var texto = document.getElementById("textoLineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();    
}

function dibujoPorClick(){

	var linea = parseInt(texto.value);
	var l = 0;
	var yi, xf;
	
	var espacio = ancho/linea;

// dibujarLinea("pink", 10, 300, 220, 10);
// dibujarLinea("yellow", 300, 10, 10, 220);

	for (l = 0; l < linea ;l++) {
		yi = espacio * l;
		xf = espacio * (l +1);
		dibujarLinea("grey", 0, yi, xf, 300);
		dibujarLinea("grey", 0, xf, 300 - yi , 0);
		dibujarLinea("grey", yi, 0, 300, xf);
		dibujarLinea("grey", 300, 300-xf, yi, 300);
		console.log("linea " + 1);  
	}

	dibujarLinea("grey", 1, 1 ,1, 299);
	dibujarLinea("grey", 1, 299, 299, 299);
	dibujarLinea("grey",299 ,1 ,1 , 1);
	dibujarLinea("grey",299 , 299, 299, 1);
}

