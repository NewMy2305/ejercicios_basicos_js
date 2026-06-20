const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];


// Opcion rapida pero menos limpia.

/* for (let i = 0; i < users.length; i++){

    if(users[i].years < 18){
        console.log("Usuarios menores de edad", users[i].name);
    } else if (users[i].years >= 18){
        console.log("Usuarios mayores de edad", users[i].name);
    }

} */



let mayores = [];
let menores = [];


for (let i = 0; i < users.length; i++){
    if (users[i].years < 18){
        menores.push(users[i].name);
    } else {
        mayores.push(users[i].name);
    }
}

console.log("Usuarios mayores de edad", mayores);
console.log("Usuarios menores de edad", menores);