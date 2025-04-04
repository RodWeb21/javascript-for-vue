// Optional chaining o encadenamiento opcional

const alumno = {
  nombre: 'Juan',
  clase: 'Programación 1',
  aprobado: true
};

setTimeout(() => {
  alumno.examenes = {
    examen1: 100,
    examen1: 90,
    examen1: 100
  }
  console.log(alumno.examenes?.examen1);
}, 3000);

console.log(alumno.examenes?.examen1);
console.log('Hola Mundo');
