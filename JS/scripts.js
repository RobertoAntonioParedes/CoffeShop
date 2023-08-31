//**querySelector */
const heading = document.querySelector('.header__texto h2');  //0 a 1 elemento
console.log(heading);


//**querySelectorAll */  //0 elementos si estan incorrectos o todos los elementos que concuerden con el elemento

//Generar un nuevo enlace

const nuevoEnlace = document.createElement('A');

nuevoEnlace.href = 'nuevo-enlace.html';

nuevoEnlace.textContent = 'Tienda virtual';

nuevoEnlace.classList.add('navegacion__enlace');

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

//Eventos

console.log(1);

window.addEventListener('load', function(){ //load espera que JS y todos los archivos que dependen del HTML esten listos 
    console.log(2);
});

window.onload = function (){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ //DOMContentLoaded solo espera que se descargue le HTML
    console.log(4);
})

console.log(5);

//scroll

window.onscroll = function(evento){
    console.log(evento);
}

//evento al hacer click: imagenes, textos

//const clickEvento = document.querySelector('.boton--primario');
//    clickEvento.addEventListener('click', function (evento){
//    console.log(evento);
//    evento.preventDefault();

//    console.log('Formulario enviado');
//});




 

//eventos de los inputs y textarea

const datos= {
    nombre: ' ',
    email: ' ',
    mensaje: ' '
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const textarea = document.querySelector('#mensaje');

//Evento de submyt
const form = document.querySelector('.formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
textarea.addEventListener('input', leerTexto);
form.addEventListener('submit', function(evento){
    evento.preventDefault();
    
    const {nombre, email, mensaje} = datos;
    if(nombre === '' || email === '' || mensaje ===''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; //corta la ejecucion del codigo
    }

    mostrarAlerta('Se ha enviado su mensaje con exito');
});

function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
//    console.log(datos);
}

//mostrar errores en pantalla

function mostrarAlerta(mensaje, error=null){
    const alerta  = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('enviado');
    }

    form.appendChild(alerta);
    
    setTimeout(()=>{
        alerta.remove();
    },5000);
}


   
