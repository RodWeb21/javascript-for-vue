// Objetos
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true
};

console.log(producto);
console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto['disponible']);

// Destructuring
const { nombre, disponible } = producto;

console.log(nombre);
console.log(disponible);

// Object literal
const autenticado = true;
const usuario = 'Juan';

const nuevoObjeto = {
  autenticado,
  usuario: usuario
};
console.log(nuevoObjeto);
