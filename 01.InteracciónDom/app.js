//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const printShowMe = document.querySelector(".showme");
console.log(printShowMe);
//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const printPillado = document.querySelector("#pillado");
console.log(printPillado);

//1.3 Usa querySelector para mostrar por consola todos los p
const printLasP = document.querySelector("p");
console.log(printLasP);
//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const todosPokemon = document.querySelectorAll(".pokemon");
console.log(todosPokemon);
//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".
const getDataFunction = document.querySelectorAll("[data-function='testMe']");
console.log(getDataFunction);
//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".
const get3DataFunction = document.querySelectorAll("[data-function='testMe=3']");
console.log(get3DataFunction);
