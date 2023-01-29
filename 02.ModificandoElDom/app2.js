//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let nuevoDiv = document.createElement('div');
console.log(nuevoDiv);
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let nuevaP = document.createElement('p');
nuevoDiv.innerHTML = nuevaP;
console.log(nuevaP);
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const bucleDiv= document.createElement("div");
document.body.appendChild(bucleDiv);


for (let i = 0; i < 5; i++) {
  const i = document.createElement("p");
  bucleDiv.appendChild(i);
}

//este ejercicio no se como hacerlo, necesito que lo explique antonio.

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let nuevoP = document.createElement('p');
let textoP = document.createTextNode('Soy dinamico');
nuevoP.innerHTML = textoP;
console.log(nuevoP);
//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
textoH2 = document.createTextNode("Wubba Lubba dub dub");

let conseguirH2 = document.querySelector("h2.fn-insert-here");

conseguirH2.appendChild(textoH2);
console.log(conseguirH2);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const nuevaUl = document.createElement('ul');
for(const word of apps){
	const crearLi = document.createElement('li');
	crearLi.innerHTML += word
	nuevaUl.appendChild(crearLi);
}
console.log(nuevaUl);


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeFn = document.querySelectorAll('.fn-remove-me');

for (const clase of removeFn){
	clase.remove()
};
console.log(removeFn);

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	//Recuerda que no solo puedes insertar elementos con .appendChild.
ponerEntreDiv = document.querySelector('div')
ponerEntreDiv.insertAdjacentHTML('beforebegin','<p>Voy en medio</p>');
console.log(ponerEntreDiv);
//console.log
//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

//recuperar los divs con la clase .fn-insert-here
divsRecuperados = document.querySelectorAll("div.fn-insert-here");
const textoFn = document.createTextNode("Voy dentro!");
for (items of divsRecuperados){
	items.insertAdjacentHTML('afterbegin', '<p>Voy dentro!</p>')
}
console.log(divsRecuperados);