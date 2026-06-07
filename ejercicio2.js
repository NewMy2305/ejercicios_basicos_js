// 2.1
const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 25;

console.log(jedi);

// 2.2
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

console.log("Soy " + nombre  + " " + apellido + ",tengo " + edad + " años" + " y soy una princesa de Alderaan");

// 2.3

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

//Opcion rapida

/* console.log(sable1.precio + sable2.precio); */

//Opcion correcta porque almacenas el dato y puedes utilizarlo mas adelante.
let resultadoSable = sable1.precio + sable2.precio;
console.log(resultadoSable);

// 2.4

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

precioBaseGlobal = 25000;

let sumNave1 = precioBaseGlobal + nave1.precioFinal;
let sumNave2 = precioBaseGlobal + nave2.precioFinal;

nave1.precioFinal = sumNave1;
nave2.precioFinal = sumNave2;

console.log(nave1.precioFinal);
console.log(nave2.precioFinal);