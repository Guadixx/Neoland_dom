//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const button = document.querySelector("button");
button.onclick = function() {
  alert("Al hacer click, enseño este mensaje!");
}
//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector('input.focus');

inputFocus.addEventListener('focus',(event) => {
    event.target.style.background = 'pink';
})
//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const recuperarInputs = document.querySelector('.value');

recuperarInputs.addEventListener('input', (event) => {
    console.log(event.target.value);
});