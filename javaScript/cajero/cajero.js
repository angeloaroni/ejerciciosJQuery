class Billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero(){
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);//convertimos la cadena de caracteres que vien desde la etiqueta tect y lo pasa a  entero
    for(var bi of caja){// bi almacena cada mienbro del arrays caja
        if(dinero > 0){            
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;                
            }else{
                papeles = div;
            }

            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero > 0) {        
        resultado.innerHTML = "no tengo pasta... :( ";
    }else{
        for(var e of entregado){//e es un ainstancia de la clase billete
            if(e.cantidad > 0){//esta condicion para que no muestre mensaje si no tenemos billete de 5
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br>";
            }
        }
    }
    
}

var caja = [];
var entregado = [];
caja.push(new Billete(1000, 10));
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));
caja.push(new Billete(5, 5));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");//cogemos el valor de la etiqueta html
b.addEventListener("click", entregarDinero);