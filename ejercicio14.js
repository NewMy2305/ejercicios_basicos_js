const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  let resultado = {}
  for (let i = 0; i < list.length; i++) {
    if (resultado[list[i]]){
        resultado[list[i]] += 1;
    } else{
        resultado[list[i]] = 1;
    }
  }
    return resultado
}


console.log(repeatCounter(words));