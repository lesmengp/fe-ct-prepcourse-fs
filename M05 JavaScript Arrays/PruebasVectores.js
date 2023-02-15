 
// FOR
var arr = [11, 21, 13, 41, 15];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]+1);
} 

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   resultado = array.map( (num) => { return num + 1 } );
   return resultado
}
arreglo = [11, 21, 13, 41, 15];
resultado = incrementarPorUno(arreglo)
console.log('incrementarPorUno: ', resultado)                 


function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.push(elemento)
    return array 
}
arreglo = [11, 21, 13, 41]
var elemento = 18
resultado = agregarItemAlFinalDelArray(arreglo, elemento)
console.log('agregarItemAlFinalDelArray: ', resultado)


//var palabra = 'Henri';
//var palabraSeparada = palabra.split('');
//console.log(palabraSeparada);
//[ 'H', 'e', 'n', 'r', 'i' ]

function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retornar un string donde todas las palabras estén concatenadas
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
    // Tu código:
    unaFrase = palabras.join(' ')
    return unaFrase
}

Palabras = ['Hello', 'world!']
resultado = dePalabrasAFrase(Palabras)
console.log(resultado)


// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

function arrayContiene(array, elemento) {
    // Verifica si el elemento existe dentro del arreglo recibido.
    // Retornar true si está, o false si no está.
    // Tu código:
    var var1 = 0
    array.forEach( (num) => { 
       if (num === elemento) {
          var1 = 1
       }
    })
    if (var1 == 1) {
        return true
    } else {
        return false
    }
}
Arreglo = [1, 2, 3, 4]
var Elemento = 79
Resultado = arrayContiene(Arreglo, Elemento) 
console.log('arrayContiene: ',Resultado)

function arrayContiene(array, elemento) {
    // Verifica si el elemento existe dentro del arreglo recibido.
    // Retornar true si está, o false si no está.
    // Tu código:
    for (let i = 0; i < array.length; i++) {
       if (array[i] == elemento) {
          return true
          break
       }
    }
    return false
}
Arreglo = [100, 2, 300, 4]
var Elemento = 79
Resultado = arrayContiene(Arreglo, Elemento) 
console.log('arrayContiene: ',Resultado)

function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
    var suma = 0
    arrayOfNums.forEach( (num) => { 
       suma = suma + num
    })
    return suma
}
Arreglo2 = [10, 22, 3, 4]
Resultado = agregarNumeros(Arreglo2) 
console.log('agregarNumeros: ',Resultado)

 

function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:
    var mayor = 0
    for(i = 0; i < arrayOfNums.lenght -1; i++) {
        console.log(i)
    }
        
}
Arreglo5 = [14, 2, 30, 4]
numeroMasGrande(Arreglo5) 
//console.log('numeroMasGrande: ',Resultado)


function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:
    var mayor = arrayOfNums[0]
    for (let i = 1; i < arrayOfNums.length; i++) {
        console.log(i)
        if (mayor < arrayOfNums[i]) {
           mayor = arrayOfNums[i]
        }
     }
    return mayor     
}
Arreglo5 = [1400, 20000, 300, 4000]
Resultado = numeroMasGrande(Arreglo5) 
console.log('numeroMasGrande: ', Resultado)

function cuentoElementos(array) {
    // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
    // Tu código:
    var suma = 0
    array.forEach( (num) => { 
       if (num > 18) {
        suma = suma + 1 
       }
    })
    return suma
}
Arreglo = [16,22,65,34,12,33,88]
Resultado = cuentoElementos(Arreglo) 
console.log('cuentoElementos(Mayores a 18): ', Resultado)


function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:
    let i = 1
    let Boolean = true
    while (i < array.length && Boolean) {
        if (array[0] == array[i]) {
            i += 1
            Boolean = true
        } else {
            return false
            break
        }   
    }
    return Boolean
}
var Arreglo = [22,22,22,22]
var Resultado = todosIguales(Arreglo) 
console.log('todosIguales: ', Resultado)

function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
    if (num < 0) {
        num = num * (-1)
    }
    if (num.toString()[0][0] == '9') {
        return true
    } else {
        return false
    }
}
var Numero = -9.45
var Resultado = empiezaConNueve(Numero) 
console.log('todosIguales: ', Resultado)


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


// Si se cumple la Condicion que todos los elementos del vector sean mayores a 5, devuelve true
var numeros = [8,6,8,9]
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
})
console.log(cumplenCondicion)


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



function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
    // Debes agregar el "nuevoAmigo" al final de este arreglo.
    // Retornar el objeto.
    // Tu código:
    objetoUsuario.amigos.push(nuevoAmigo)
    return objetoUsuario
}
var Objeto = { amigos: ['Jhon','Pedro'], password: 'correo' }
var NuevoAmigo = 'Lesmen'         
var Resultado = agregarAmigo(Objeto,NuevoAmigo)
console.log(Resultado)


function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
    // Cada usuario tiene una propiedad llamada "esPremium".
    // Define esta propiedad de todos los usuarios como true.
    // Retornar el arreglo.
    // Tu código:
    for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
       objetoMuchosUsuarios[i].esPremium = true  
    }
   return objetoMuchosUsuarios
}
 
var Objeto = [{"esPremium": false}, {"esPremium": true}, {"esPremium": false}]        
var Resultado = pasarUsuarioAPremium(Objeto)
console.log(Resultado)   

// var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

/* var Objeto = [{"esPremium": false}, {"esPremium": true}, {"esPremium": false}] 
for (let i = 0; i < Objeto.length; i++) {
    Objeto[i].esPremium = true  
}
console.log(Objeto) */


function sumarLikesDeUsuario(objetoUsuario) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
    Objeto2 = objetoUsuario.posts
    var suma = 0
    for (const propiedad in Objeto2) {
        suma = suma + Objeto2[propiedad].likes
    }
    return suma
}
var Objeto = { posts: [{"likes": 3}, {"likes": 5}, {"likes": 2}] , password: 'correo' }      
var Resultado = sumarLikesDeUsuario(Objeto)
console.log(Resultado) 


