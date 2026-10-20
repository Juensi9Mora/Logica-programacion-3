// Se debe traer los elementos del HTML con getElementByid
const formulario = document.getElementById("formulario");
const inputNumero = document.getElementById("numero");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");

// Por medio de una función que calcula el numer factorial
// Ejemplo: 4! = 1 * 2 * 3 * 4 = 24.
function calcularFactorial(n) {
    // se entiendo como que 0! y 1! valen 1
  let total = 1;
    for (let i = 2; i <= n; i++) {
        total = total * i;
    }
            return total;
}

// Se agrega función que muestre un error en pantalla
function mostrarError(mensaje) {
  operacion.textContent = "";
  resultado.textContent = mensaje;
  resultado.classList.add("error");
  console.log("Error:", mensaje);
}

function armarOperacion(n) {
  // se limita a mostarar pasos si el numero es pequeño (solo hasta 10)
  if (n > 10) {
    return n + "!";
    }
        if (n === 0) {
            return "0! = 1";
         }

  let pasos = "";
  for (let i = 1; i <= n; i++) {
    pasos += i === 1 ? "1" : " x " + i;
    }
        return n + "! = " + pasos;
}

// evitar que se recargue la página
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); 
// Si lo que escribe es un string 
  const texto = inputNumero.value.trim();
         // debe escribir un numero para que funcione
        if (texto === "") {
        mostrarError("Escribe un número para calcular.");
            return;
  }

  // Convertir el texto a número
  const numero = Number(texto);

  // Que sea un numero
  if (Number.isNaN(numero) || !Number.isInteger(numero)) {
    mostrarError("Solo se permiten números enteros.");
    return;
  }

  // Se valida que no sea negativo (se consulta que no es posible a numeros negativos)
  if (numero < 0) {
    mostrarError("El factorial no existe para números negativos.");
    return;
  }

  // Se limita hasta el numero 20
  if (numero > 20) {
    mostrarError("Usa un número hasta 20, rescribe tu numero antes de contiuar");
    return;
  }

  // Si todo está bien calculamos
  const factorial = calcularFactorial(numero);
 
  resultado.classList.remove("error");
  operacion.textContent = armarOperacion(numero);
  resultado.textContent = factorial;
 

  // se requiere imprimir por consola segun el laboratorio 
  console.log("El factorial de " + numero + " es " + factorialTexto);
});