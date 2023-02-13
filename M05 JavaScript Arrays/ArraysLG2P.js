/* ALT + SHIFT + A
var listaDeCompras = [];
listaDeCompras[3]='Tomates';
listaDeCompras[1]='Lechugas';

console.log(listaDeCompras);

var elementoDeArray = listaDeCompras[1]
console.log(elementoDeArray)


console.log(listaDeCompras.length)

// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres); 
*/


//El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
//El método pop() elimina y devuelve el último elemento de un arreglo.
//El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.
//El método shift() elimina y devuelve el primer elemento de un arreglo.

//El método includes() determina si un arreglo incluye o contiene un elemento específico. 
///Devuelve true o false en cada caso.
//El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.
//El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.
//El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.

/* // PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores); */
/* 
// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);
 */
/* // INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY Condicion que se aplica a todos los elementos del arreglo
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );
console.log(cumplenCondicion);

// Si se cumple la Condicion que todos los elementos del vector sean mayores a 5, devuelve true
var numeros = [8,6,8,9]
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
})
console.log(cumplenCondicion)


// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// FOREACH Recorre el arreglo pero NO modifica los elementos del arreglo
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP Recorre todo el arreglo y Puede modificar los elementos del arreglo
var arr = [1, 2, 3, 4, 5];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno); 

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

*/
//El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
//El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. 
//La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.


// BUCLES O CICLOS EN LOS ARRAYS


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let mesesABuscar = ["Enero", "Marzo", "Noviembre"]
   let nuevoArreglo = []
   mesesABuscar.forEach( (num) => { 
       for (let i = 0; i < array.length; i++) {
           if (num == array[i]) {
               nuevoArreglo.push(num)
               break
           }
       }    
   })
   if (mesesABuscar.length == nuevoArreglo.length) {
       return nuevoArreglo
   } else {
       return 'No se encontraron los meses pedidos'
   }
}
var Arreglo = ['Diciembre', 'Marzo', 'Octubre', 'Enero', 'Julio','Noviembre']
var Resultado = mesesDelAño(Arreglo) 
console.log('mesesDelAño: ', Resultado)
console.log('TypeOf: ', typeof(Resultado))
console.log('Array.isArray: ', Array.isArray(Resultado))


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var NumeroTabla = 6
   let array = []
   for (let i = 0; i < 11; i++) {
       console.log('%d x %d = %d',NumeroTabla, i, 6*i)
       array.push(NumeroTabla*i)
       }
    return array
}

Resultado = tablaDelSeis()
console.log(Resultado)
console.log('TypeOf: ', typeof(Resultado))
console.log('Array.isArray: ', Array.isArray(Resultado))


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let mesesABuscar = ["Enero", "Marzo", "Noviembre"]
   let nuevoArreglo = []
   mesesABuscar.forEach( (num) => { 
       if (array.includes(num)) {
           nuevoArreglo.push(num)
       }
   })
   if (mesesABuscar.length == nuevoArreglo.length) {
       return nuevoArreglo
   } else {
       return 'No se encontraron los meses pedidos'
   }
}
var Arreglo = ['Diciembre', 'Marzo', 'Octubre','Enero', 'Julio','Noviembre']
var Resultado = mesesDelAño(Arreglo) 
console.log('mesesDelAño: ', Resultado)
console.log('TypeOf: ', typeof(Resultado))
console.log('Array.isArray: ', Array.isArray(Resultado))


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nuevoArreglo = new Array()
   array.forEach( (num) => { 
       if (num > 100) {
           nuevoArreglo.push(num)
       }
   })
   return nuevoArreglo
}
Numeros = [149, 143, 77, 134, 127, 81, 146, 107, 78, 62, 54, 143, 59, 91, 70, 92, 101, 108, 122, 93, 112]
var Resultado = mayorACien(Numeros) 
console.log('nuevoArreglo: ', Resultado)
console.log('TypeOf: ', typeof(Resultado))
console.log('Array.isArray: ', Array.isArray(Resultado))






