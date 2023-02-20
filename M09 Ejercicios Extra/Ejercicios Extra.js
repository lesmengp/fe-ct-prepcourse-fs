/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var nuevoArreglo = [];
   for (let prop in objeto) {
       nuevoArreglo.push([prop, objeto[prop]]);
   }
   return nuevoArreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   string = string.split('').sort();
   nuevoObjeto = {};
   var contar = 0;
   for (let i = 0; i < string.length ; i++) { 
       if (string[i] != string[i+1]) {
           nuevoObjeto[string[i]] = contar + 1;
           contar =0;
       }else {
           contar = contar + 1 ;
       }  
   }
   return nuevoObjeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var palabraSeparada = string.split('');
   nuevoArrayMayusculas = [];
   nuevoArrayMinusculas = [];
   palabraSeparada.forEach( (letra) => { 
      if (letra.toUpperCase() === letra) {    // Implica que es Mayuscula
         nuevoArrayMayusculas.push(letra);
      }else {
         nuevoArrayMinusculas.push(letra);
      }
   })
   return nuevoArrayMayusculas.join('') + nuevoArrayMinusculas.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   nuevoArray = [];
   var fraseMirror = ''
   var palabrasSeparadas = frase.split(' ');   // Palabras separadas en un Array
   palabrasSeparadas.forEach( (palabra) => { 
      var letras = palabra.split('')
      nuevoArray = [];
      for (let i = letras.length -1; i >=0; i--) {
      nuevoArray.push(letras[i]);
      }
      fraseMirror = fraseMirror + nuevoArray.join('') + " "; 
   } )
   fraseMirror = fraseMirror.slice(0,-1);
   return fraseMirror
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var str = (numero.toString()).split('');
   var repit = Math.trunc((str.length)/2);
   var tope = str.length - 1;
   var esCapicua = true
   for (let i = 0; i < repit; i++) {
      console.log(i,repit,tope)
      if (str[i] != str[tope]) {
         esCapicua = false;
      }
      tope = tope - 1;
   }
   if (esCapicua){
      return 'Es capicua';
   }else {
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var letrasEliminar = 'abc';     // Letras a eliminar del string
   for (i=0;i< letrasEliminar.length;i++) {
      var repetir = true;
      while (repetir) {
         if (string.includes(letrasEliminar.charAt(i))) {
            string = string.replace(letrasEliminar.charAt(i),'');
         }else {
            repetir = false;
         }
      }
   }
return string
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var tempo = ''
   for (let i = 0; i < arrayOfStrings.length -1; i++) {
      for (let j = i+1; j < arrayOfStrings.length; j++) {
         if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
            tempo = arrayOfStrings[j];
            arrayOfStrings[j] = arrayOfStrings[i];
            arrayOfStrings[i] = tempo;
         }
      }  
   }
  return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   nuevoArreglo = [];
   for (let num1=0 ; num1 < array1.length ; num1++) {
      if (array2.includes(array1[num1])) {
         nuevoArreglo.push(array1[num1]);
      }
   }
   return nuevoArreglo.sort()
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
