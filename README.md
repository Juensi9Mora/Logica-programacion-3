# Calculadora de factorial

Práctica de lógica de programación HTML, CSS y JavaScript.
La página calcula el factorial de un número entero y lo muestra en pantalla y por consola.

## ¿Qué es el factorial?

Primero debemos entender que es el factorial de un número: es el producto de todos los números enteros positivos
desde el 1.

Ejemplo: `4! = 1 x 2 x 3 x 4 = 24`

Por definición, `0! = 1`.

## Funcionalidad segun el laboratorio:

- Campo para ingresar un número y botón **Calcular**.
- Muestra la operación paso a paso para números pequeños (hasta 10).
- Validaciones con mensajes de error.
- Resultados muy grandes se muestran en notación científica.
- Resultado también impreso en la consola del navegador.

## Cómo funciona el algoritmo:

Pseudocódigo:                           En JavaScript:

```                                     ```js
total = 1                               function calcularFactorial(n) {
repetir con i desde 2 hasta n:              let total = 1;
    total = total x i                   for (let i = 2; i <= n; i++) {
devolver total                              total = total * i;
```                                           }
                                                return total;
                                        }
                                        ```




