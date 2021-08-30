function BinarioADecimal(num) {
  // tu codigo aca 
  var str = num.toString() // convierto num en string para split
  var array = str.split('').reverse() // array pero en reverse facilitar calculos
  function strTonum(st) {
    switch (st) {
      case st = '0': return 0;
      case st = '1': return 1;
      default: return false;
    }
  }
  ///
  var sumatoria = 0;
  for (i = 0; i < array.length; i++) {
    var numero = strTonum(array[i]);//tambie pude con parseInt(array[i],10) string to interger
    sumatoria = sumatoria + (numero * Math.pow(2, i))
  }
  //var str =num.split('')
  return sumatoria; // sumatoria viene siendo el numero dex del bin
}
////////////////////********************************** //////////////////////////
//POR RECURSIVIDAD
/*
function find( num ){
    if (num === 0)
        return 0;
    else
        return num % 2 + 10 * find(Math.floor(num / 2));
}
console.log(find(29))
*/
function DecimalABinario(num) {
  // tu codigo aca
  var array = []// array donde guardar valores de los residuos
  do {
    array.push( num % 2); // agrego valores al array
    num = Math.floor(num / 2); // redondeo a piso corto decimales
  } while (num >= 1);/// mientras que sea mayor a 1 divido.
  array.reverse(); // giro array
  var numero = array.join('');// tengo string concatenado
  // debo llevar string a numero metodo parseInt(); 
  //numero = parseInt(numero , 10); // convierto str en numero base 10
 //
 try{ return numero;
 /* NOTA tarea mala pide devolver string cuando deberia ser cero
  donde es posible hacerlo con una funcio tipo switch o con metodo de PerformanceNavigationTiming()*/
}
catch (error) {
  console.log("Error Atrapado: " + error.message);
}
}
/*
function DecimalABinario(num){
   
  try{
     var array =[];
      if (num < 0 || num !== parseInt(num,10)) throw "introdusca numero entero > 0";
      else{
    do {
     array.push(num % 2);
      num = Math.floor(num / 2);
    }
    while(num !== 0)
      
      throw array.reverse().join('')
      }
  }
  catch(err){ //entre parentesis nombre dare al error
    return err // devolvera el err que es todo lo que tiene throw  como return en programa dentro de try
  }
 }
*/


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}