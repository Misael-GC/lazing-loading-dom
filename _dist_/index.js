import { registerImage } from "./lazy.js";
import jsx from '../_snowpack/pkg/hyperscript.js';

const min = 1;
const max = 122;
const random = () => Math.floor(Math.random()* (max - min)) + min;


const createImageNode =  () => {
    // const image = document.createElement('img'); //creamos la img
    // image.className = 'mx-auto'; //podemos aplicar tailwind
    // image.width = '320'
    // image.dataset.src =`https://randomfox.ca/images/${random()}.jpg`;

    const image = jsx('img.mx-auto', {
        width: '320',
        'data-src':`https://randomfox.ca/images/${random()}.jpg`,
    });

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'bg-gray-300';
    imgWrapper.style.minHeight ='100px';
    imgWrapper.style.display = 'inline-block';
    // imgWrapper.style.position = 'absolule'

    // const container = document.createElement('div');//creamos el item para el contenedor
    // container.className = 'p-4';
    const container = jsx('div.p-4.mt-3', imgWrapper);


    imgWrapper.appendChild(image);//le metemos la imagen al contenedor
    // container.appendChild(imgWrapper);//le metemos el nuevo contenedor con la imagen al contenedor principal

    appendedImages ++;
    printLog()

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


//--------bitones delete -----------------------------------------

//delete last image
const removeButton = document.querySelector('#remove');
removeButton.className = 'text-white px-3 py-2 rounded-lg bg-gray-900 focus:outline-none mt-5';

const removeImage = () => {
if (mountNode.hasChildNodes()) {
const container = mountNode.lastElementChild;
        mountNode.removeChild(container);
    }
}



//delete All image
const allRemoveButton = document.querySelector('#removeAll');
allRemoveButton.className = 'text-white px-6 py-2 rounded-lg bg-gray-900 focus:outline-none mt-3';

const AllremoveImage = () => {

// console.log(mountNode.childNodes); //es un objeto convertir a un array
let elementosCompletos = Object.values(mountNode.childNodes);
// console.log(elementosCompletos);

elementosCompletos.forEach(child => {
    child.remove();

})

}



//delete la primer imagen
const firstRemoveButton = document.querySelector('#removeFirst');
firstRemoveButton.className = 'text-white px-3 py-2 rounded-lg bg-gray-900 focus:outline-none';

const firstRemoveImage = () =>{
        mountNode.childNodes.forEach(child => {
        child.remove();
    })
}


firstRemoveButton.addEventListener('click', firstRemoveImage)
removeButton.addEventListener('click', removeImage);
allRemoveButton.addEventListener('click', AllremoveImage);

