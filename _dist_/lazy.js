
const isIntersecting = (entry)=> {
    return entry.isIntersecting //true (dentro de la pantalla)
}

const loadImage = (entry) => {
    const container = entry.target; //container = contenedor div con la img
    const imagen = container.firstChild.firstChild;
    debugger;
    const url = imagen.dataset.src;
    //cargue image
    imagen.src = url;

    // debugger;
    //console.log(container.nodeName);

    observer.unobserve(container);
}

//vamos a usar la API IntersectionObserver, recibe una función donde vamos a especificar que hacer por cada omg
const observer = new IntersectionObserver((entradas)=>{
    entradas
    .filter(isIntersecting)//se esta interseptando las imagenes, es decir son visibles en la pantalla
    .forEach(loadImage)//por cada uno de los elementos que ya se encuentra en la pantalla se realiza una accion
})

//cramos una función que recibe una img y lo exportaremos

export const registerImage = (Image) => {
    //itersectaction Observador -> observar(image)
    observer.observe(Image)
}

//