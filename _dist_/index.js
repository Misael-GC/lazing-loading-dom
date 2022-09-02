import { registerImage } from "./lazy.js";

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

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'bg-gray-300';
    imgWrapper.style.minHeight ='100px';
    imgWrapper.style.display = 'inline-block';
    // imgWrapper.style.position = 'absolule'

    imgWrapper.appendChild(image);//le metemos la imagen al contenedor
    container.appendChild(imgWrapper);//le metemos el nuevo contenedor con la imagen al contenedor principal
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


//delete last image
const removeButton = document.querySelector('#remove');
removeButton.className = 'text-white px-3 py-2 rounded-lg bg-gray-900 focus:outline-none';

const removeImage = () => {
if (mountNode.hasChildNodes()) {
const container = mountNode.lastElementChild;
        mountNode.removeChild(container);
    }
}

removeButton.addEventListener('click', removeImage);

//delete All image
const AllremoveButton = document.querySelector('#removeAll');
AllremoveButton.className = 'text-white px-3 py-2 rounded-lg bg-gray-900 focus:outline-none';

const AllremoveImage = () => {

// console.log(mountNode.childNodes); //es un objeto convertir a un array
let k = Object.values(mountNode.childNodes);
console.log(k);

k.forEach(child => {
    child.remove();
    console.log(k)
})

}

AllremoveButton.addEventListener('click', AllremoveImage);
