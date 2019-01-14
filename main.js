$(document).on('ready', funcPrincipal);

function funcPrincipal()
{
    $('#btnVerificar').on('click', funcVerificar);
}

function funcVerificar() 
{
    var valorEscrito= $("#txtUser").val();
    $.get("verificarUsuario.php?usuario="+valorEscrito, function(data) {
        var respuesta;
        if(data == "0")
            respuesta = "Este nombre de usuario esta disponible";
        else respuesta = "Este nombre de usuario ya esta en uso";

        $('#respuesta').text(respuesta);
    });
    
  }
