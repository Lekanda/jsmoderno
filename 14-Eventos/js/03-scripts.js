// En este video estaremos viendo eventos que suceden con el teclado, es decir cuando el usuario escribe en un input...


// tenemos un formulario 

const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('input', () => {
//     console.log('escribiendo...');
// })


// keydown  - cuando presionas una tecla 
// keyup - Cuando sueltas la tecla...
// blur - cuando sales del input - ideal para validación...
// También hay eventos para cortar copiar y pegar

// cut
// copy
// paste
// input - cuando se ejecutan todas las que aquí se muestran... incluyendo cortar, pegar y copiar


// Ahora, no tiene mucha utilidad enviar a la consola un mensaje no? lo ideal seria saber el texto que se escribe o poderlo leer...

// busqueda.addEventListener('input', e => {
//     console.log(e); // Mucha información...
//     console.log( e.type ); // Te dira sobre que elemento estamos trabajando...
//     console.log(e.target); // el input completo...

//     console.log(e.target.value) // lo que el usuario escribe...

// })

// También puede ser como función...


busqueda.addEventListener('input',  leerInput);

function leerInput(e) {
    console.log(e); // Mucha información...
    console.log(e.data); // Mucha información...
    console.log( e.type ); // Te dira sobre que elemento estamos trabajando...
    console.log(e.target); // el input completo...
    console.log(e.target.value) // lo que el usuario escribe...

}