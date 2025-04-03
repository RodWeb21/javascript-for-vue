// Destructuring de 2 o más objetos

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true
};

const cliente = {
  nombre: 'Juan',
  premium: true
};

console.log(producto.nombre);
console.log(cliente.nombre);

const { nombre: nombreProducto } = producto;
const { nombre: nombreCliente } = cliente;

console.log(nombreProducto);
console.log(nombreCliente);
