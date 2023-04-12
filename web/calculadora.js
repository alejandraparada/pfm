var aislamiento = 0;
// var edificio = 0;
var biomasa = 0;
var superficie = 0;
var nroPersonas = 0;
var nroHoras = 0;
var nroDias = 0;
var rendimientoBiomasa = 0;
var rendimientoGasoleo = 0;
var potencia = 0;
var emision= 0;
var consumoB = 0;
var consumoG = 0;
var consumo1 = 0;
var consumo2 = 0;
var consumo = 0;
var cantidad = 0;
var cantidadG = 0;
var precio = 0;
var precioG = 0;

function calcularResultado(){
    //Obtenemos los valores de la variable aislamiento y edificio
    var tipoAislamientoBueno = document.getElementById("ch-atbn").checked;
    var tipoAislamientoBajo = document.getElementById("ch-atbj").checked;
    var tipoEdificioVivienda = document.getElementById("ch-tev").checked;
    var tipoEdificioPiso = document.getElementById("ch-tep").checked;

    if (tipoAislamientoBueno == true && tipoEdificioPiso == true){
        console.log("75")
        aislamiento= 75;
    }else if (tipoAislamientoBueno == true && tipoEdificioVivienda == true){
        console.log("77")
        aislamiento= 77;
    }else if (tipoAislamientoBajo == true && tipoEdificioPiso == true){
        console.log("87")
        aislamiento= 87;
    }else if (tipoAislamientoBajo == true && tipoEdificioVivienda == true){
        console.log("89")
        aislamiento= 89;
    }

    //Obtenemos valor de superficie
    superficie= document.getElementById("inputSuperficie").value;
    console.log(superficie)

    //Obtenemos valor de nro de personas
    nroPersonas= document.getElementById("inputPersonas").value;
    console.log(nroPersonas)

    //Obtenemos valor de nro de horas
    nroHoras= document.getElementById("inputHorasDia").value;
    console.log(nroHoras)

    //Obtenemos valor de nro de días
    nroDias= document.getElementById("inputDias").value;
    console.log(nroDias)

    //CONSTANTES
    //Obtenemos valor de rendimiento de caldera Biomasa
    var rBiomasa= document.getElementById("inputRendimientoB").value;
    rendimientoBiomasa= rBiomasa/100;
    console.log(rendimientoBiomasa)

    //Obtenemos valor de rendimiento de caldera Gasoleo
    var rGasoleo= document.getElementById("inputRendimientoG").value;
    rendimientoGasoleo= rGasoleo/100;
    console.log(rendimientoGasoleo)

    //Obtenemos las variables del tipo de combustible
    var tipoCombustiblePellet = document.getElementById("ch-tcp").checked;
    var tipoCombustibleAstilla = document.getElementById("ch-tca").checked;
    
    //CÁLCULOS
    //Calculo potencia
    potencia = (aislamiento*superficie)/1000
    console.log("potencia", potencia)
    //Mostramos la potencia sugerida
    document.getElementById("inputPotencia").innerHTML = potencia

    //Calculo de Consumo
    consumo1 = potencia * nroHoras * nroDias *0.85
    consumo2 = (nroPersonas*30*365*1*(60-10))*0.001163
    consumo = consumo1 + Math.round(consumo2) 
    console.log("consumo", consumo, consumo1, consumo2)

    //Calculo consumo en funcion al rendimiento
    consumoB= consumo/rendimientoBiomasa
    consumoG= consumo/rendimientoGasoleo
    console.log("consumoR", consumoB, consumoG)
    //Mostramos el consumo de biomasa
    document.getElementById("inputConsumoB").innerHTML = Math.round(consumoB);
    document.getElementById("inputConsumoG").innerHTML = Math.round(consumoG);

    //Calculo Emision Co2
    emision = consumoG * 0.287
    document.getElementById("inputEmision").innerHTML = Math.round(emision);

    //Calculo cantidad en kg y precio
    // Hacemos el cálculo en funcion al tipo de combustible
    var pciAstilla = 3.5;
    var pciPellet = 4.9;
    var pciGasoleo = 9.994;
    var precioAstilla = 0.028;
    var precioPellet = 0.055;
    var precioGasoleo = 0.096;

    cantidadG = consumoG/pciGasoleo
    precioG = consumoG*precioGasoleo
    console.log("Gasoleo", cantidadG, precioG)

    if (tipoCombustiblePellet == true ){
        cantidad = consumoB/pciPellet
        precio = consumoB*precioPellet
        console.log("Pellet", cantidad, precio)

    }else if (tipoCombustibleAstilla == true){
        cantidad = consumoB/pciAstilla
        precio = consumoB*precioAstilla
        console.log("Astilla", cantidad, precio, Math.round(cantidad))
    }

    //Mostramos los valores
    document.getElementById("inputKgB").innerHTML = Math.round(cantidad)
    document.getElementById("inputKgG").innerHTML = Math.round(cantidadG)
    document.getElementById("inputEurosB").innerHTML = Math.round(precio)
    document.getElementById("inputEurosG").innerHTML = Math.round(precioG)
    


}

