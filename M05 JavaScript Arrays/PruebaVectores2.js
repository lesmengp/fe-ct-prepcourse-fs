/* 
function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
    var nuevoArreglo = []
    var sumaValores = 0
    var cantidadIteraciones = 0
    for (let i = num + 2; i <= num + 20; i+=2) {
        nuevoArreglo.push(i)
        cantidadIteraciones += 1
        sumaValores = sumaValores + i
        if (sumaValores == cantidadIteraciones) {
            return 'Se interrumpió la ejecución'
            break
        }
    }
    return nuevoArreglo
 }
Numero = -4
var Resultado = breakStatement(Numero) 
console.log('nuevoArreglo: ', Resultado)
console.log('TypeOf: ', typeof(Resultado))
console.log('Array.isArray: ', Array.isArray(Resultado))


function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:
    var nuevoArreglo = []
    var numeroIteraciones = 0
    for (let i = num + 2; i <= num + 20; i+=2) {
        numeroIteraciones += 1
       if (numeroIteraciones == 5 || i == 5) {
          continue
        } else {
         nuevoArreglo.push(i)
        } 
    }
    return nuevoArreglo
}
 Numero = -3
 var Resultado = continueStatement(Numero) 
 console.log('continueStatement: ', Resultado)
 console.log('TypeOf: ', typeof(Resultado))
 console.log('Array.isArray: ', Array.isArray(Resultado))

 */

/* var Numeros = [0]
// Generando Arreglo de 200 elementos. Contiene numeros desde CERO hasta DOSCIENTOS
for (let i = 0; i < 21; i++) {
    let random = Math.random()
    random = random * 100 + 50
    random = Math.trunc(random)
    Numeros[i] = random

}
console.log(Numeros)    */



// <  >

/* var lista = [0]
// Se ejecuta 10 veces
for (let i = 0; i < 201; i++) {
    let random = Math.random()
    random = random * 100 + 1
    random = Math.trunc(random)
    lista[i] = random
}
console.log(lista)
console.log(typeof(lista))
console.log(Array.isArray(lista))  */

/* // Si se cumple la Condicion que todos los elementos del vector sean mayores a 5, devuelve true
var numeros = [8,6,8,9]
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
})
console.log(cumplenCondicion) */
      
// Numeros = [149, 143,  77, 134, 127,  81, 146, 107,  78,  62,  54, 143, 59,  91, 70,  92, 101, 108, 122,  93, 112]


function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    if (arguments.length == 0) {
        return 0
    }else if (arguments == 1) {
        return arguments
    } else { 
        var producto = 1
        for (let i = 0; i < arguments.length; i++) {
            producto = producto * arguments[i]
        }
    }
    return producto   
}
var Resultado = multiplicarArgumentos(3)
console.log(Resultado)



// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);
// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);
// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);
// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);
// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);
// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);
// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )
// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);

