const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
   let resultado = [];
   for (let i = 0; i < list.length; i++) {
    if (!resultado.includes(list[i])){
        resultado.push(list[i]);
    }
   }
   return resultado;
}


console.log(removeDuplicates(duplicates));