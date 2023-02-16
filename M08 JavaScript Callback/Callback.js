/* // FUNCIONA FINE
var palabra = "caracas";
console.log(palabra.UpperCase
const string = "freeCodecamp";
console.log(string.charAt(0).toUpperCase()); // Retorna "F"
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);
var palabraInvertida = [];
for (let i = palabraSeparada.length -1; i >= 0 ; i = i - 1) {
  //palabraInvertida = push(palabraSeparada[i])
  palabraInvertida.push(palabraSeparada[i])
  console.log(palabraSeparada[i]);
}
console.log(palabraInvertida);
console.log(palabraInvertida.join(''));
 */
ararrayOfNumbersray = [1,2,3,4]
var suma = 0;
ararrayOfNumbersray.forEach( (num) => { 
   suma = suma + num;
})
console.log(suma)