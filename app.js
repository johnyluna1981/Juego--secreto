

let = numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML= texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {

        asignarTextoElemento("p",`Felicitaciones es el numero! en ${intentos} ${(intentos === 1) ? "vez" : ("veces")}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p" , "El numero secreto es menor");
        }else{
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos ++;
        limpiarCaja();
    }
    return;
    
    
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    
}

function generarNumeroScreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero generado esta incluiido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los numeros")
        
    }else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroScreto();
        }else{

            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
    
       
}   

function condicionesIniciales() {
    asignarTextoElemento("h1","JUEGO DEL NUMERO SECRETO");
    asignarTextoElemento("p", `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroScreto();
}   intentos = 1;

function reiniciarJuego() {

    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
    
}

condicionesIniciales();

