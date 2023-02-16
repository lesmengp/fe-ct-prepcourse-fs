function crearUsuario() {
    // Crea una Clase de ES6 o una función constructora llamada "Usuario".
    // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
    // El valor de cada propiedad la recibirá por parámetro.
    // Además, esta clase debe tener un método llamado "saludar".
    // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
    // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
    // Retornar la clase.
    // Tu código:
    class Usuario {
       constructor(usuario, nombre, email, password) {
         this.usuario = usuario;
         this.nombre = nombre;
         this.email = email;
         this.password = password;
       }
     }
     Usuario.prototype.saludar = function() {
       return "Hola, mi nombre es " + this.nombre;
     }
     return Usuario;
 }

 // El mismo ejercicio anterior 
 function crearUsuario() {
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

  
  function agregarStringInvertida() {
    // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse".
    // [PISTA]: necesitarás utilizar el objeto "this".
    String.prototype.reverse = function() {
       return this.split('').reverse().join('');
    }
 }

 function agregarStringInvertida() {
    // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse".
    // [PISTA]: necesitarás utilizar el objeto "this".
    String.prototype.reverse = function() {
       return this.split('').reverse().join('');
    }
 }

 function agregarStringInvertida() {
    // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse".
    // [PISTA]: necesitarás utilizar el objeto "this".
    String.prototype.reverse = function() {
       var palabraSeparada = this.split('');
       var palabraInvertida = [];
       for (let i = palabraSeparada.length -1; i >= 0 ; i = i - 1) {
          palabraInvertida.push(palabraSeparada[i]);
        }
    return (palabraInvertida.join(''));
    }
 }
 