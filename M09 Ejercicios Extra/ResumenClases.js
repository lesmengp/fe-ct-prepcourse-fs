function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código: 
    string = string.split('').sort();
    nuevoObjeto = {};
    var newArrayKeys = [];
    var newArrayValues = [];
    newArrayKeys.push(string[0]);
    var contar = 0;
    var contar2 = 0;
    for (let i = 0; i < string.length ; i++) { 
        if (string[i] != string[i+1]) {
            newArrayKeys.push(string[i+1]);
            newArrayValues.push(contar+1);
            //console.log(string[i], contar + 1);
            contar = 0;
        }else {
            contar = contar + 1 ;
        }  
    }
    if ( (newArrayKeys[string.length]) == undefined) {
        newArrayKeys.pop()
    } 
    nuevoObjeto = Object.fromEntries(newArrayKeys)  
    return nuevoObjeto
}
Objeto = "adsjfdsfsfjsdjfhacabcsbajdazz"
Resultado = numberOfCharacters(Objeto)
console.log(Resultado);
 // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }




 function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código: 
    string = string.split('').sort();
    nuevoObjeto = {};
    var newArrayKeys = [];
    var newArrayValues = [];
    newArrayKeys.push(string[0]);
    var contar = 0;
    var contar2 = 0;
    for (let i = 0; i < string.length ; i++) { 
        if (string[i] != string[i+1]) {
/*             newArrayKeys.push(string[i+1]);
            newArrayValues.push(contar+1); */
            nuevoObjeto[string[i]] = contar + 1;
            contar =0;
        }else {
            contar = contar + 1 ;
        }  
    }
  /*   if ( (newArrayKeys[string.length]) == undefined) {
        newArrayKeys.pop();
    } */ 
    //nuevoObjeto = Object.fromEntries(newArrayKeys);  
    return nuevoObjeto
}
Objeto = "adsjfdsfsfjsdjfhacabcsbajdazz"
Resultado = numberOfCharacters(Objeto)
console.log(Resultado);
 // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }



 function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código: 
    string = string.split('').sort();
    nuevoObjeto = {};
    newArrayKeys.push(string[0]);
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
Objeto = "adsjfdsfsfjsdjfhacabcsbajda"
Resultado = numberOfCharacters(Objeto)
console.log(Resultado);
