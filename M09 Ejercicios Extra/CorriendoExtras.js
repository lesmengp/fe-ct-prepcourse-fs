
/* function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    // Tu código:
    tempo = ''    
    for (let i = 0; i < arrayOfStrings.length -1; i++) {
        for (let j = i+1; j < arrayOfStrings.length; j++) {
            if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
                console.log(arrayOfStrings[i].length, arrayOfStrings[j].length);
                tempo = arrayOfStrings[j];
                arrayOfStrings[j] = arrayOfStrings[i];
                arrayOfStrings[i] = tempo;
            }
        }  
    }
    return arrayOfStrings
}
Arreglo = ["You", "are", "beautiful", "looking"];
Resultado = sortArray(Arreglo);
console.log(Resultado);

 */

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
Arreglo1 = [6,2,5];
Arreglo2 = [1,3,4];
Resultado = buscoInterseccion(Arreglo1,Arreglo2);
console.log(Resultado);

