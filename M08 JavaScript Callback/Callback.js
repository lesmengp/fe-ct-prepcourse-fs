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




//Todos los ejercicios del CallBack
/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    // Tu código:
    var palabraSeparada = nombre.split('');
    var primeraLetra = palabraSeparada.shift().toUpperCase()
    palabraSeparada = palabraSeparada.join('')
    return (primeraLetra + palabraSeparada)
 }
 
 function invocarCallback(cb) {
    // Invoca/ejecuta el callback `cb`.
    // [NOTA]: no debes reotrnar nada.
    // Tu código:
    cb()
 }
 
 function operacionMatematica(num1, num2, cb) {
    // En este ejercicio recibirás dos números y un callback.
    // El callback realiza una operación matemática, por lo que necesita de los dos números.
    // Retorna el resultado del callback pasándole como parámetros los números.
    // Tu código:
    return cb(num1,num2)
 }
 
 function sumarArray(arrayOfNumbers, cb) {
    // Recibes un arreglo de números y un callback.
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // [NOTA]: no debes reotrnar nada.
    // Tu código:
    var suma = 0;
    arrayOfNumbers.forEach( (num) => { 
       suma = suma + num;
    })
    cb(suma);
 }
 
 function forEach(array, cb) {
    // Recibes un arreglo y un callback.
    // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
    // Debes pasarle el elemento como argumento al callback.
    // Tu código:
    array.forEach( (element) => { 
       cb(element)
    })
 }
 
 function map(array, cb) {
    // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
    // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
    // Retorna el nuevo arreglo.
    // Tu código:
    let nuevoArreglo = []
    array.forEach( (elemento) => { 
       nuevoArreglo.push(cb(elemento))
    })
    return nuevoArreglo
 }
 
 function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    let nuevoArreglo = []
    arrayOfStrings.forEach( (string) => { 
       var palabraSeparada = string.split('');
       if (palabraSeparada[0] == 'a' ) {
          nuevoArreglo.push(string);
        }
    })
    return nuevoArreglo
 }