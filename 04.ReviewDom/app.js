//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');

for (const item of countries){
    const li = document.createElement('li')
    li.innerHTML += item
    ul.appendChild(li)
};
console.log(ul);


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminarElem = document.querySelector('.fn-remove-me');
eliminarElem.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
//primero crear una ul > li con los elementos de la lista.

const ul2 = document.createElement('ul');
for (const item of cars){
    const li2 = document.createElement('li')
    li2.innerHTML += item
    ul2.appendChild(li2)
};
console.log(ul2);
//Ahora tengo que meter la ul2 en el div del html, primero tengo que recuperar el div 
const div = document.querySelector('[data-function="printHere"]');
div.appendChild(ul2);
console.log(div);

//AAAAA ME SALIO POR MI CUENTA NO LO PUEDO CREER QUE FELICIDAD NO LO PUEDO CREER DIOSA IDOLA CRACK CAPA GENIA SUPERADA 


//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
//crear una lista de div que tenga un h4 para el titulo y otro elemento para la imagen 
const ul3 = document.createElement('ul');

for (const item of countries2){
    const li3 = document.createElement('li')
    const div2 = document.createElement('div')
    const h1 = document.createElement('h1')
    const img = document.createElement('img')
    //los elementos creados, ahora meto cada titulo y cada imagen en las etiquetas correspondientes
    img.src = item.imgUrl
    h1.innerHTML += item.title
    //ahora tengo que meterlos dentro del div y despues el div meterlo en el li
    div2.appendChild(img)
    div2.appendChild(h1)
    li3.appendChild(div2)
    ul3.appendChild(li3)
}
console.log(ul3);
//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la lista.
const button = document.querySelector("button")

button.addEventListener("click", () =>{const guardar = ul3.lastChild;
    guardar.remove()}
);
//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//elementos de las listas que elimine ese mismo elemento del html.

//no entiendo a que se refiere este enunciado 