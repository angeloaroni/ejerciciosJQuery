/*recoje los datos del fichero datos,txt
$(document).ready(function () {    
    $("button").click(function () { 
        $.get("datos.txt", function (dato, status, XHR) {
            console.log("Mensaje: "+ dato + "\nStatus: "+ status + " "+ XHR.status);        
        });        
    });  
});
*/
/*cogemos datos de un json
$(document).ready(function () {
    $("button").click(function () { 
        $.get("datos.json",function (datos) {
            console.log(datos);
            $("#info").text(datos.nombre + ' ' + datos.apellido);        
        });
    });
});
*/
/*coge datos de un array de jsaon
$(document).ready(function () {
    $("button").click(function () { 
        $.get("datos.json", function(datos) {
            console.log(datos);
            if ($("#info").is(":empty")) {
                $.each(datos, function(index, obj) { 
                $("#info").append(obj.nombre + ' ' + obj.apellido + '<br>' );     
                });
            }
                    
        });
    });
});
*/
//usamos $.getJason
$(document).ready(function () {
    $("button").click(function () { 
        $.getJSON("datos1.json",function (datos) {
                console.log(datos);
                if ($("ul").is(":empty")) {
                    $.each(datos.empleados, function (index, obj) { 
                    $("ul").append('<li>' + obj.nombre + ":" +obj.salario + '</li>');
                   });
                }
        });
        
    });
});



























