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
    objetoProducto.calcularPrecioDescuento = function () {
        var precioConDescuento = (this.precio -  this.precio * this.porcentajeDeDescuento);
        return precioConDescuento;
     }
     return objetoProducto.calcularPrecioDescuento();
}
var Objeto = { precio: 10, porcentajeDeDescuento: 0.2 }      
var Resultado = agregarMetodoCalculoDescuento(Objeto)
console.log(Resultado) 


/* const object = { a: 10, b: 200, c: 3000 };
for (const propiedad in object) {
  console.log(`${propiedad}: ${object[propiedad]}`);
  console.log(object[propiedad])
}  */




