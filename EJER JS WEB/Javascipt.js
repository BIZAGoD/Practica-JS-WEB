
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

function invertirCadenaYMostrar() {
    let cadenaInput = document.getElementById('cadenaInput').value;
    let cadenaInvertida = invertirCadena(cadenaInput);
    document.getElementById('cadenaInvertida').textContent = cadenaInvertida;
}


function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return false;
    }
    return true;
}

function determinarPrimoYMostrar() {
    let numeroInput = parseInt(document.getElementById('numeroInput').value);
    let resultadoPrimo = esPrimo(numeroInput) ? "El número es primo" : "El número no es primo";
    document.getElementById('resultadoPrimo').textContent = resultadoPrimo;
}

function eliminarDuplicados(arreglo) {
    return [...new Set(arreglo)];
}

function eliminarDuplicadosYMostrar() {
    let arregloInput = document.getElementById('arregloInput').value;
    let arreglo = arregloInput.split(',').map(Number);
    let arregloSinDuplicados = eliminarDuplicados(arreglo);
    document.getElementById('arregloSinDuplicados').textContent = arregloSinDuplicados.join(', ');
}

function calcularFactorial(numero) {
    if (numero < 0) return -1;
    if (numero === 0) return 1;
    return numero * calcularFactorial(numero - 1);
}

function calcularFactorialYMostrar() {
    let factorialInput = parseInt(document.getElementById('factorialInput').value);
    let resultadoFactorial = calcularFactorial(factorialInput);
    document.getElementById('resultadoFactorial').textContent = resultadoFactorial !== -1 ? resultadoFactorial : "Número no válido";
}


function contarVocales(cadena) {
    let vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let char of cadena) {
        if (vocales.includes(char)) {
            contador++;
        }
    }
    return contador;
}

function contarVocalesYMostrar() {
    let vocalesInput = document.getElementById('vocalesInput').value;
    let resultadoVocales = contarVocales(vocalesInput);
    document.getElementById('resultadoVocales').textContent = resultadoVocales;
}


function sumarArreglo(arreglo) {
    return arreglo.reduce((suma, num) => suma + num, 0);
}

function sumarArregloYMostrar() {
    let sumarArregloInput = document.getElementById('sumarArregloInput').value;
    let arreglo = sumarArregloInput.split(',').map(Number);
    let resultadoSumaArreglo = sumarArreglo(arreglo);
    document.getElementById('resultadoSumaArreglo').textContent = resultadoSumaArreglo;
}


function encontrarMaximo(arreglo) {
    if (arreglo.length === 0) {
        return null;
    }
    let maximo = arreglo[0]; 
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i]; 
        }
    }
    return maximo;
}

function encontrarMaximoYMostrar() {
    let maximoArregloInput = document.getElementById('maximoArregloInput').value;
    let arreglo = maximoArregloInput.split(',').map(Number); 
    let maximo = encontrarMaximo(arreglo);
    document.getElementById('resultadoMaximoArreglo').textContent = maximo !== null ? maximo : "Arreglo vacío";
}
