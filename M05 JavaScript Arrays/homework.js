/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var ultimoElemento = array.length
   return array[ultimoElemento - 1]
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var resultado = array.map( (num) => { return num + 1 } );
   return resultado
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array 
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.

   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   unaFrase = palabras.join(' ')
   return unaFrase

}

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

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0
   resultadosTest.forEach( (num) => { 
      suma = suma + num
   })
   var promedio = (suma / resultadosTest.length)
   return promedio
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var mayor = arrayOfNums[0]
   for (let i = 1; i < arrayOfNums.length; i++) {
       if (mayor < arrayOfNums[i]) {
          mayor = arrayOfNums[i]
       }
    }
   return mayor
}

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

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia == 7 || numeroDeDia == 1 ) {
      return "Es fin de semana"
   } else {
      return 'Es dia laboral'
   }
}

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

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var i = 1
   var Boolean = true
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

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesABuscar = ["Enero", "Marzo", "Noviembre"]
   var nuevoArreglo = []
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

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var NumeroTabla = 6
   var array = []
   for (let i = 0; i < 11; i++) {
       //console.log('%d x %d = %d',NumeroTabla, i, 6*i)
       array.push(NumeroTabla*i)
       }
    
    return array
}

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

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

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
      if (numeroIteraciones != 5) {
         nuevoArreglo.push(i)
      }else {
         continue
      } 
   }
   return nuevoArreglo
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
