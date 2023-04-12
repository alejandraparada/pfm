var refCatastral = "";
var direccion = "";
var codContenedor = "";
var kilos = 0;
var emision = 0;
var puntos = 0;

function generarTicket(){
    // Obtenemos la fecha actual
    var fecha = new Date();
    console.log(fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());
    document.getElementById("fecha").innerHTML="Fecha: " + fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()

    document.getElementById("hora").innerHTML="Hora: " + fecha.toLocaleTimeString();

    //Obtenemos los valores de las variables
    refCatastral = document.getElementById("inputReferencia").value
    console.log(refCatastral)

    codContenedor = document.getElementById("inputContenedor").value
    console.log(codContenedor)

    direccion = document.getElementById("inputDireccion").value
    console.log(direccion)


    //Mostramos la variable en el ticket
    document.getElementById("txtReferencia").innerHTML= refCatastral
    document.getElementById("txtContenedor").innerHTML= codContenedor
    document.getElementById("txtDireccion").innerHTML= direccion
    

    //Calculo de emisiones de CO2
    //(Por cada Kg de papel reciclado, se evita 1,2kg CO2)
    kilos = document.getElementById("inputKilos").value
    console.log("kilos ",kilos)
    emision = kilos * 1.2
    console.log("emision ",emision)


    //Mostrar los kg reciclados
    document.getElementById("inputReciclar").innerHTML= kilos

    //Mostrar las emisiones de CO2 evitados
    document.getElementById("inputEmision").innerHTML= emision

    //Calculo de puntos por kg reciclado
    puntos = kilos * 20
    console.log("pts ", puntos) 
    document.getElementById("inputPuntos").innerHTML= puntos
    document.getElementById("puntos").innerHTML= puntos

}

function descargarPdf(){
    var divContents = $("#divTicket").html();
    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write('<html><head><title>DIV Contents</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

