
function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2

  /*var count = 0;
  function countUp() {
    count ++;
    return count;
  }
  return countUp;
  * o puedecer :/
  /*var count=0;
  return function (){
      count= count + 1;
      return count;
  }* o tambien mejor: */
  var count = 1;
  return function () {
    return ++count;
  }
}

function cacheFunction(cb) {
  // Usa closures para crear un cache para la funcion cb.
  // la funcion que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la funcion que hayas retornado es invocada de nuevo, deberia guardar el argumento y el resultado de la invocacion
  // cuando la funcion que retornaste sea invocada de nuevo con un argumento con el cual se habia invocado anterioremente, no deberia invocar de nuevo a cb
  // deberia retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty! cache { 5: 25, 3: 9}
  /* un clouser una funcion que llama otra funcion pero utiliza una o unas variable que se encuentra fuera de su contexto de ejecucion */
  var cache = {}
  return function (argumento) {
    if (cache.hasOwnpropety(argumento)) {
      return cache[argumento]
    }
    else {
      cache [argumento] = cb(argumento)
      return cb(argumento);
    }

  }

}

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25
}

var alumno = {
  nombre: "Juan",
  curso: "FullStack"
}

function getNombre() {
  return this.nombre;
}
// Escribir código sin modificar lo que ya se encuentra escrito arriba para poder llamar al método getNombre primero para obtener el nombre del instructor y luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!
var instructorName = getNombre.bind(instructor);
var alumnoName = getNombre.bind(alumno);


/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena" y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"
*/
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la funcion crearCadena.

let textoAsteriscos = crearCadena.bind(this, "*", "*");

let textoGuiones = crearCadena.bind(this, "-", "-");

let textoUnderscore = crearCadena.bind(this, "_", "_");



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
