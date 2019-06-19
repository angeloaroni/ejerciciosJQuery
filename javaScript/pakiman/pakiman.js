//crea clase con un constructor para declarar las variables para acceder a ella tenemos qeu usar la palabre this
class Pakiman{
    //creamos constructor
    constructor(n, v, a){
        // creamos nueva clase de tipo Imagen()
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre];
    }
    //creamos funcion Hablar no hace falta la palabra function por que estamos dentro de una clase
    hablar(){
        alert(this.nombre);
    }
    //creamos funcion para agregar la imagen
    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br/>");
        document.write("Vida: " + this.vida + "<br/>");
        document.write("Ataque: " + this.vida);
        document.write("</p>" + "<hr>");
    }
}