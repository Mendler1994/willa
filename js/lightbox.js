//    TUTORIAL: https://www.youtube.com/watch?v=ivyIqmczxHU&ab_channel=AlexCGDesign
//    Dejo el video en el minuto 54:49
//    Ver menu.js

const imagenes = document.querySelector('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburguer1 = document.querySelector('.hamburguer');


//error
imagenes.forEach(imagen =>{
        imagen.addEventListener('click', () => {
            aparecerImagen(imagen.getAttribute('src'));
        });
    })
//--------------------------------//


contenedorLight.addEventListener('clik', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}