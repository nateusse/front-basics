/* 1. 

    Realiza un programa que, mediante una función denominada permuta, 
    implemente la permutación de los valores de dos variables enteras 
    que se rellenaron en la función principal.
*/

function permuta(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

let x = 5, y = 10;
[x, y] = permuta(x, y);
console.log("x:", x, "y:", y);


/* 2. 
    Realiza un programa que simule, mediante una función denominada cuenta, 
    cómo el ordenador cuenta por pantalla, desde 0 hasta un número a determinar por el usuario. 
    Dicho número se pide en la función principal y se envía a la función cuenta por valor,
    donde se irán imprimiendo.
*/
function cuenta(hasta) {
  for (let i = 0; i <= hasta; i++) {
    console.log(i);
  }
}

let numeroCuenta = parseInt(prompt("Ingresa un número:"));
cuenta(numeroCuenta);

/* 3. 
Realiza un programa que, pidiendo la introducción de un número, 
averigua mediante una función si dicho número es positivo, negativo o nulo. 
Para ello, deberás escribir en pantalla, en caso positivo, 
el mensaje: “El número es positivo”. En el caso de ser negativo, escribirás: 
“El número es negativo”. Si resulta ser nulo, deberá decir: “El número es nulo”.
*/

function evaluarNumero(n) {
  if (n > 0) {
    console.log("El número es positivo");
  } else if (n < 0) {
    console.log("El número es negativo");
  } else {
    console.log("El número es nulo");
  }
}

let numeroNatural = parseFloat(prompt("Ingresa un número:"));
evaluarNumero(numeroNatural);