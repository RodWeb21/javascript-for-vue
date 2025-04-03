// Arrays o Arreglos
const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS'];

// tecnologias.push('Git'); // Añade elemento al final del arreglo
// tecnologias.unshift('Git'); // Añade elemento al inicio del arreglo

// tecnologias.pop(); // Elimina elemento del final del arreglo
// tecnologias.shift(); // Elimina elemento del incio del arreglo

// tecnologias.splice(2, 2);

const tecnologias2 = tecnologias.filter(function(tech) {
  return tech != 'HTML';
});

console.table(tecnologias2);
