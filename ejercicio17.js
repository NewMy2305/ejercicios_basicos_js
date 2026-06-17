const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};


for (const clave in alien){
    console.log("La propiedad", (clave));
    console.log("tiene cómo valor:", alien[clave]);
}


