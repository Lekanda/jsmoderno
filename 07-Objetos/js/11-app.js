// Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
console.log(producto);



// Object Constructor
function Producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Tablet de lujo",700);
console.log(producto2);

const producto3 = new Producto("TV de Plasma",1700);
console.log(producto3);