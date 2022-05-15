let cantidad = Number(prompt("Ingrese la cantidad de arreglos"));
let numeros: number[] = new Array(cantidad);
let indice: number;

for (indice = 0; indice < cantidad; indice++) {
  numeros[indice] = Number(prompt("Ingrese los numeros"));
}
let numeroPositivo = 0;
let numeroNegativo = 0;
let cantidadCeros = 0;

for (indice = 0; indice < cantidad; indice++) {
  if (numeros[indice] === 0) {
    cantidadCeros++;
  } else if (numeros[indice] > 0) {
    numeroPositivo++;
  } else {
    numeroNegativo++;
  }
}
console.log(
  "Hay " +
    numeroPositivo +
    " positivos " +
    numeroNegativo +
    " negativos " +
    cantidadCeros +
    " ceros"
);
