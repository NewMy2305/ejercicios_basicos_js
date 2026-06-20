const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },  
  { name: "The Matrix", durationInMinutes: 136 },  
  { name: "Amélie", durationInMinutes: 110 },  
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];


const PeliculaPequeña = [];
const PeliculaMediana = [];
const PeliculaGrande = [];


for (let i = 0; i < movies.length; i++){
    if(movies[i].durationInMinutes < 100){
        PeliculaPequeña.push(movies[i].name);
    } else if (movies[i].durationInMinutes === 100 || movies[i].durationInMinutes < 200){
        PeliculaMediana.push(movies[i].name);
    } else if (movies[i].durationInMinutes > 200){
        PeliculaGrande.push(movies[i].name);
    }
}

console.log("Peliculas Pequeñas", PeliculaPequeña);
console.log("Peliculas Medianas", PeliculaMediana);
console.log("Peliculas Grandes", PeliculaGrande);