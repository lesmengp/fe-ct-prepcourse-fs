
function viajar(destino) {
    if (destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  
  viajar('Brasil');
  viajar('Argentina');
  viajar('Venezuela');

  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } else {
        console.log( false );
    }
    
  }
  
  puedeManejar(17);


  function devolverString(string) {
    // Debe retornar un string.
    // Tu código:
    if (typeof(string)=='string') {
        return string;
    } else {
        return 'No es un String';
    } 
        
    };
     
 var x = devolverString('AAA')
 console.log(x)


 function tienenMismaLongitud(str1, str2) {
    // Retorna true si los dos strings tienen la misma longitud.
    // De lo contrario, retorna false.
    // Tu código:
    if ( str1.length == str2.length ){
       // console.log('entro')
        return 'true'
    } else {
        // console.log('No entro')
        return 'false'
    }  
 }
var str1 = 'Ahr'
var str2 = 'cgs'
var resultado = tienenMismaLongitud(str1, str2)
console.log(resultado)



function esPar(num) {
    // Retorna true si "num" es par.
    // De lo contrario, retorna false.
    // Tu código:
    var sal = 'es par'
    if (num % 2 == 0){
        return sal
    } else {
        sal = 'false'
        return sal
    }
 }
var numero = 11
resultado = esPar(numero)
console.log(resultado)




function esPositivo(num) {
    // La función recibe un entero. Devuelve como resultado un string que indica si el número
    // es positivo o negativo.
    // Si el número es positivo ---> "Es positivo".
    // Si el número es negativo ---> "Es negativo".
    // Si el número es 0, devuelve false.
    // Tu código:
    
    if (num > 0) {
       return 'Es positivo'
    } else if (num < 0) {
       return 'Es negativo'
    } else if (num == 0) {
       return 'False'
    }
 }
var numero = 0
resultado = esPositivo(numero)
console.log(resultado)



function esEntero(num) {
    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:
    
    if ( num % 1 == 0) {
        return true
    } else {
        return false
    }
      
 }
var numero = 6
resultado = esEntero(numero)
console.log(resultado)




function operadoresLogicos(num1, num2, num3) {
    // La función recibe tres números distintos.
    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    // Si todos los argumentos son cero, retornar ---> "Error".
    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
    // Tu código:
    if (num1 == 0 & num2 == 0 & num3 == 0) {
        return 'Error'
    } else {
        if (num1 >= 0) {
            if (num2 >= 0) {
                if (num3 >= 0 ) {
                    if (num1 > num2) {
                        if (num1 > num3) {
                            return "Numero 1 es mayor y positivo"
                        } else if (num3 > num2) {
                            return num3 + 1
                        } else {
                            return false
                        }
                    } else if (num2 < num3) {
                        return num3 +1
                    } else {
                        return false
                    }
                } else {
                    return "Hay negativos"
                }
            } else {
                return "Hay negativos"
            }
        } else {
            return "Hay negativos"
        }
    }
  
 }   // Fin de Funcion
var num1 = 0
var num2 = 0
var num3 = 0
salida = operadoresLogicos(num1, num2, num3)
console.log(salida)


function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    var divid = 2
    var var1 = 'true'
    if (num <= 0 | num == 1) {
        return false
    } else {
        for (divid;divid < num; divid++) {
            if ((num % divid) == 0) {
                var1 = 'false'
                console.log('Entro al false')
                console.log(var1)
                break
            }
        }
        if (var1 == 'true') {
            return true
        } else {
            return false
        }
    }

 }
var num = -9
resultado = esPrimo(num)
console.log('Numero primo')
console.log(resultado)

function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos retornar true.
    // Caso contrario, retornar false.
    // Tu código:
    if (num.toString().length == 3) {
        return true
     } else {
        return false
     }
 }
var num = 1234
resultado = tieneTresDigitos(num)
console.log(resultado)

function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    var suma = num
    var veces = 0
    do {
       suma = suma + 5
       console.log(suma)
       veces +=1
    } while (veces <= 7) 
    return suma
 
 }
var num = 2
resultado = doWhile(num)
console.log(resultado) 

