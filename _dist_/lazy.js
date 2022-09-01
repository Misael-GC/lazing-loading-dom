
const isIntersecting = (entry)=> {
    return entry.isIntersecting //true (dentro de la pantalla)
}

const accion = (entry) => {
    const nodo = entry.target;
    console.log('holis');

    observer.unobserve(nodo);
}

//vamos a usar la API IntersectionObserver, recibe una función donde vamos a especificar que hacer por cada omg
const observer = new IntersectionObserver((entradas)=>{
    entradas
    .filter(isIntersecting)//se esta interseptando las imagenes, es decir son visibles en la pantalla
    .forEach(accion)//por cada uno de los elementos que ya se encuentra en la pantalla se realiza una accion
})

//cramos una función que recibe una img y lo exportaremos

export const registerImage = (Image) => {
    //itersectaction Observador -> observar(image)
    observer.observe(Image)
}