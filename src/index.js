/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
//crear (1) image
//agregar #image
//referencia

//formula del random
const min = 1;
const max = 122;
const random = () => Math.floor(Math.random()* (max - min)) + min;


const createImageNode =  () => {
    const container = document.createElement('div');//creamos el item para el contenedor
    container.className = 'p-4';

    const image = document.createElement('img'); //creamos la img
    image.className = 'mx-auto'; //podemos aplicar tailwind
    image.width = '320'
    image.src =`https://randomfox.ca/images/${random()}.jpg`; //TO Do

    container.appendChild(image);//le metemos la imagen al contenedor
    return container;
};


const nuevaImg = createImageNode(); //lo referenciamos a una variable
const mountNode = document.getElementById('images') //lo guardamos en una referencia porque lo vamos a usar much
mountNode.append(
    nuevaImg,
    createImageNode(),
    createImageNode(),
    createImageNode(),
    createImageNode()
    ) //lo metemos a la etiqueta ancla del HTML

