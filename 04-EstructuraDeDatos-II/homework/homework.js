// resolve estos ejercicios usando recursión

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

class LinkedList { //EM6 style
  //this._length_ = 0;
  constructor() {
    this.head = null;
  }
  ////////
  add(valor) {
    var nodo = new Node(valor);
    if (!this.head) {// condicion si la lista esta vacia
      this.head = nodo;
    }
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = nodo;
    }
  }
}

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
/////////////////
LinkedList.prototype.remove = function () {
  if (!this.head === null) return null;
  let current = this.head;
  if (current.next === null) {//estoy ultomo nodo  
    this.head = null;
    return current;// or current.value si no trabaja
  } else {
    let current = this.head;
    while (current.next.next !== null) {
      current = null;
      let dataRemove = curret.next.value;
      return  dataRemove;
    }
  }

}

LinkedList.prototype.search = function (arg){
if (this.head === null) return null;
var cb;
if(typeof arg != 'function'){
  cb = function(valor){
    return valor === arg;
  }
}
else{
  cb = arg;
}
let current = this.head;
while(current.next != null){
  if(cb(current.value) ){
    return current.value;
  }
  else{
    current = current.next
  }

}
return null;
}



// Hash Table
// Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
// Para guardar un valor asociado a una key (string):
//    - Correr la key a través de una función hash para transformarla a un número entero.
//    - Usar ese número como índice para ver en cuál contenedor guardarás el valor.
// Para buscar el valor por su key:
//    - Correr la key por la función hash para conseguir el número.
//    - Usar el número para buscar el contenedor donde está el valor.
//    - Devolver el valor.

function HashTable(str) {//convierte str en numero contenedores[numero]=str;
  var indice = parseInt(str,10);

  var contenedores = [];//[str1,str2,,str4]
  contenedores[indice]= str;
  return contenedores;
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
