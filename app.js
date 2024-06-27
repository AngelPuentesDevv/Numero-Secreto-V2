let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

let descripcion = document.querySelector(".texto__parrafo");
descripcion.innerHTML = `Inserta un número de 1 a ${numeroMaximo}: `;

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroSecreto === numeroDeUsuario) {
    asignarTextoElemento(
      "p",
      `¡Felicidades! Has acertado en ${numeroIntentos} ${
        numeroIntentos === 1 ? "vez" : "veces"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
    //El usuario no acertó
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    numeroIntentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya se han sorteado todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Has llegado al número máximo de intentos");
  } else {
    //Si el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego secreto");
  asignarTextoElemento("p", `Inserta un número de 1 a ${numeroMaximo}: `);
  numeroSecreto = generarNumeroSecreto();
  numeroIntentos = 1;
}

function reiniciarJuego() {
  //Se necesita limpiar la caja
  limpiarCaja();
  //Se necesita indicar el mensaje de inicio (insertar número)
  //Se necesita generar el número aleatorio
  //Se debe inicializar el número de intentos
  condicionesIniciales();
  //Se necesita deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
