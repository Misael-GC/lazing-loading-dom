import { registerImage } from "./lazy";

const min = 1;
const max = 122;
const random = () => Math.floor(Math.random()* (max - min)) + min;


const createImageNode =  () => {
    const container = document.createElement('div');//creamos el item para el contenedor
    container.className = 'p-4';

    const image = document.createElement('img'); //creamos la img
    image.className = 'mx-auto'; //podemos aplicar tailwind
    image.width = '320'
    image.dataset.src =`https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(image);//le metemos la imagen al contenedor
    return container;
};


const nuevaImg = createImageNode(); //lo referenciamos a una variable
const mountNode = document.getElementById('images') //lo guardamos en una referencia porque lo vamos a usar much

//creamos el boton que traiga un nuevo
const addButton = document.querySelector('button');

//accion del boton agregar img
const addImage = () => {
    const newImage = createImageNode(); //se crea un contenedor con la img
    mountNode.append(newImage) //lo metemos a la etiqueta ancla del HTML
    registerImage(newImage);//registralo en el lazing loading y la empieces a escuchar
};

addButton.addEventListener('click', addImage)



