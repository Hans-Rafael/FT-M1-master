
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiguen cual es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; // no esta definida 
var a = 5;
var b = 10;
var c = function(a, b, c) { //comienza c
  var x = 10;
  console.log(x); // 10
  console.log(a);   // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b);//8
    b = c; // b vale 10 dentro de F ahora 
    var x = 5; //x solo funciona para f
  }
  f(a,b,c);
  console.log(b); //muestra 9 pues esta por fuera de f el valor nunca se altero
}                          // termina C
c(8,9,10); // deberia imprime 10,8,8 ,9
console.log(b); //imrime 10 se cambio valor con c function
console.log(x);  // x no esta definida fuera de la funcion por lo que no puede leerla
```

```javascript
console.log(bar); //var Bar deberia estar definida antes de la funcion
console.log(baz); ///no es una variable definida
foo(); // iimprime Hola! 
function foo() { console.log('Hola!'); } //imprime hola
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);// franco si solo si  exixte instructor
```

```javascript
var instructor = "Tony";
console.log(instructor);// muestra Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();// muestra franco como funcion anonima
console.log(instructor);// tony nuevamente se encuentra en bloque diferente
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {//
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//"The Flash"
    console.log(pm); // "Reverse Flash"
}//
console.log(instructor);// Tony
console.log(pm);// franco
```
### Coerción de Datos

¿Qué crees que van dar estas operaciones?:

```javascript
6 / "3"        //2 
"2" * "3"      // 6
4 + 5 + "px"    //9px
"$" + 4 + 5    // $9
"4" - 2         // 2
"4px" - 2       // NaN
7 / 0           //infinity
{}[0]             // undefined
parseInt("09")    // 9
5 && 2           //2 el 5 es true y 5 true muestro segundo verdadero
2 && 5           // 5
5 || 0           // 5  el 5 siempre tomo el numero o string ya sea positivo o negativo contra un cero(false)
0 || 5           // 5
[3]+[3]-[10]     // 23  pues 3+3 = 33 - 10 = 23 
3>2>1             // false 3>2 true = 1 y comparo 1 > 1 false 
[] == ![]         // true 
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output que vemos en consola luego de ejecutar este código? Explicar porque es así:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); //undefined + 2var a no esta definida el momento de invocar funcion busca de entro de ella no encuentra , busca mas arriba y tampoco consigue devuelve undefine mientrar que 
// aa foo regresa un numero asignado directamente. 
```

Y el de este:

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);// retorna undefined, pregunta food es true ,no! entonse pasa al el trata de retornar snack pero al ser mismo nombre de variable donde dentro de la funcion esta designada no puede buscarla afuera
```


### This

¿Cuál es el output que vemos en consola luego de ejecutar esté código? Explicar porqué es así:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());// muestra 'Aurelio De Rosa'

var test = obj.prop.getFullname; // asigno a la variable test 'Aurelio De Rosa' solo si invoco primero getfullname con ()

console.log(test()); //undefinido trato de invocar test como funcion y solo es una variable que NO esta bien definida
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden del ouput? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); ///// 1,4,3,2 log inmediatle in orden de arriba a bajo lo que no tienen set tieme (1,4) y luego por menor tiempo ordenado 3 luego 2 
```
