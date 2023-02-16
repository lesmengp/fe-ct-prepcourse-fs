/* function crearUsuario() {
  // Crea una Clase de ES6 o una función constructora llamada "Usuario".
  // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
  // El valor de cada propiedad la recibirá por parámetro.
  // Además, esta clase debe tener un método llamado "saludar".
  // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
  // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
  // Retornar la clase.
  // Tu código:
  function Usuario(usuario, nombre, email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
  }
  Usuario.prototype.saludar = function() {
    return "Hola, mi nombre es " + this.nombre;
  }
  return Usuario;
}
let Usuario = new crearUsuario()
let user01 = new Usuario('Programador','Lesmen','lesmengp@gmail.com','gdfster34251');
Resultado = user01.saludar();
console.log(Resultado);
 */

/* function agregarMetodoPrototype(Usuario) {
  // Agrega un método al prototipo de "Usuario".
  // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
  // Tu código:
  Usuario.prototype.saludar = function() {
    return "Hello World!"
  }
} */


/* function agregarStringInvertida() {
  // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse".
  // [PISTA]: necesitarás utilizar el objeto "this".
  string.prototype.reverse = function() {
     var palabraSeparada = this.string.split('');
     console.log(palabraSeparada)
     var palabraInvertida = "";
     for (let i = palabraSeparada.length -1; i <= 0; i--) {
        palabraInvertida = palabraInvertida + this[i];
     }
     return palabraInvertida
  }
}
var string = 'CARACAS'
var Resultado = reverse('CARACAS')
console.log(Resultado) */

/* 
function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  objetoProducto.calcularPrecioDescuento = function() {
     return (this.precio -  (this.precio * this.porcentajeDeDescuento));
  }
  //return objetoProducto.calcularPrecioDescuento();
  return (objetoProducto);
}
var Objeto = { precio: 10, porcentajeDeDescuento: 0.2 }      
var Resultado = agregarMetodoCalculoDescuento.calcularPrecioDescuento(Objeto)
console.log(Resultado) 
 */



/* // FUNCIONA FINE
var palabra = "CARACAS";
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

// ------
 */

