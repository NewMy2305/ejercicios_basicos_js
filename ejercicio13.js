const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nombre) {
    let encontrado = false;
    let posicion = -1;
    for ( let i = 0; i < nameList.length; i++){
        if (nameList[i] === nombre){
        encontrado = true;
        posicion = i;
        }
    }

    if (encontrado) {
        console.log(nombre, "se encuentra en la lista, con la posicion", posicion);
    }else{
        console.log("El nombre no se encuentra en la lista")
    }
}

// Para probarlo en el navegador desde consola

/* const nombre = prompt("Introduce un nombre")
nameFinder(names, nombre); */


// Para probarlo desde consola

nameFinder(names, "Miguel");