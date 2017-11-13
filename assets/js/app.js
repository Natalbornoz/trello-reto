function trello() {
  //debo crear un boton y un input
  var container = document.getElementById('container');
  var btn = document.createElement('button');
  var input = document.createElement('input');
  var nodoText = document.createTextNode('Guardar');

  //atributos
  input.setAttribute('id', 'valor');
  // button.setAttribute('id','button');

  //nodos
  btn.appendChild(nodoText);
  container.appendChild(btn);
  container.appendChild(input);


btn.addEventListener('click', function(){//para rescatar el valor que estña dentro del input, recordar poner .value;
 var list = document.getElementById('valor').value;//para guardar el valor, debo lamar al div que esta en el html
document.getElementById('valor').value="";
var contiene = document.getElementById('contiene');//quiero rescatar el texto
var parrafo = document.createElement('p');
var textNuevo = document.createTextNode(list);//cuando apriente añadir tarjeta, se desplegara untext area
var add = document.createElement ('a');//añadir atributos a "a"
add.setAttribute=('href', '#');

var textAdd = document.createTextNode ('añadir tarjeta');


parrafo.appendChild(textNuevo);
contiene.appendChild(parrafo);
add.appendChild(textAdd);
contiene.appendChild(add);

add.addEventListener('click', function(){

  var textarea = document.createElement('textarea')
  var add = document.createElement('a')
  add.setAttribute=('href','#')
  var textAdd= document.createTextNode('añadir tarjetas')
  add.appendChild(textAdd)
  contiene.appendChild(textarea)
  contiene.appendChild(add)

// function trello () {
// var texto = document.getElementById('text').value; //llamare al text aere y rescato el texto que el usuario escribio
// var pe = document.createElement('p');//teniendo el valor rescatadpcrear el lugar en el que lo almacenare (abajo)
//
// var nuevoText = document.createTextNode(texto);//quiero pasarle el textp del text area, y debo crear el espacio, saquitoo vacio
// pe.appendChild(nuevoText);//le decimos a p que es papa de nuevoText para que se adhiera"pe, tu hijo es nuevoText"
// //donde quiero que se muestre ?
//
// var contiene = document.getElementById('contiene'); // se crea variable para que contenga a pe y nuevoText
// pe.setAttribute ('class','parrafo'); // se le asignan atributos al pe
// contiene.appendChild(pe);
// }

})

})
}
