// PUSH. El método push() añade uno o más elementos al final de un arreglo, y 
// devuelve la nueva longitud del array.
var colores = ['Amarillo', 'Azul'];
console.log(colores);
colores.push('Rojo');
console.log(colores);

// UNSHIFT. El método unshift() agrega uno o más elementos al inicio de un arreglo, y 
// devuelve la nueva longitud del array.
colores.unshift('Verde');
console.log(colores);

// POP. El método pop() elimina y devuelve el último elemento de un arreglo.
colores.pop();

// SHIFT. El método shift() elimina y devuelve el primer elemento de un arreglo.
colores.shift();
console.log(colores);

// INCLUDES. El método includes() determina si un arreglo incluye o contiene un elemento específico. 
// Devuelve true o false en cada caso.
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');
console.log(existeDali);

// EVERY. El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );
console.log(cumplenCondicion);


// SPLIT. El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, 
// dependiendo del parámetro divisor que indiquemos.
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

// JOIN. El método join() convierte un arreglo en un string, 
// uniendo todos los elementos de este en una misma cadena.
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

// RECORRIENDO UN ARREGLO
// ----------------------
// FOREACH. El método forEach() nos permite recorrer un arreglo, realizando alguna acción en cada elemento.
var numeros = [ 100, 250, 300, 450 ];
numeros.forEach( (num) => { console.log(num) } )

// FOREACH. Recorrer un Array
numeros.forEach(function(elemento, indice, array) {
    console.log('Elemento:', elemento, 'Indice:', indice);
})

// MAP. El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. 
// La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
var numeros = [ 10, 20, 30, 40 ];
var masUno = numeros.map( (num) => { return num + 1 } );
console.log(masUno);




// Acceder a un elemento de Array mediante su índice:
var frutas = ["Manzana", "Banana"];
console.log(frutas.length);
// 2
let primero = frutas[0];
console.log(frutas[0]);
// Manzana
let ultimo = frutas[frutas.length - 1];
console.log(frutas[frutas.length - 1]);
// Banana

frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})

// Encontrar el índice de un elemento del Array
let pos = frutas.indexOf('Banana');
console.log('Posicion de elemento=', pos);

// Eliminar varios elementos a partir de una posición
// SPLICE. El metodo .splice() no solo se puede eliminar elementos del array, si no que 
// también podemos extraerlos guardándolo en un nuevo array. ¡
// Ojo! que al hacer esto estaríamos modificando el array de origen.
let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria'];
console.log(vegetales);
var posicion = 1;
var numElementos = 2;
var elementosEliminados = vegetales.splice(pos, numElementos)
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"
console.log(vegetales)
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"


// Copiar un Array
// ---------------
let copiaArray = vegetales.slice();
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"

frutas= []
frutas.push('banana', 'manzana', 'pera')
console.log(frutas.length) // 3

frutas[5] = 'fresa'
console.log(frutas[5])           // 'fresa'
console.log(Object.keys(frutas)) // ['0', '1', '2', '5']
console.log(frutas.length)       // 6

// Si se aumenta el valor de length:
frutas.length = 10
console.log(frutas)              // ['banana', 'manzana', 'pera', <2 empty items>, 'fresa', <4 empty items>]
console.log(Object.keys(frutas)) // ['0', '1', '2', '5']
console.log(frutas.length)       // 10
console.log(frutas[8])           // undefined

// Si se disminuye el valor de la propiedad length pueden eliminarse elementos:
frutas.length = 2
console.log(Object.keys(frutas)) // ['0', '1']
console.log(frutas.length)       // 2

// Creación de un array a partir de una expresión regular
// ------------------------------------------------------
// // Para obtener un array de esta forma puede utilizarse RegExp.exec(), String.match() o String.replace().
const miRe = /d(b+)(d)/i
const miArray = miRe.exec('cdbBdbsbz')


// Bucle For
// Bucle For. Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas 
// por puntos y comas, seguidas de una sentencia ejecutada en un bucle.
// Sintaxis: for ([expresion-inicial]; [condicion]; [expresion-final])sentencia 
// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}





// Bucle While. 
// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);


