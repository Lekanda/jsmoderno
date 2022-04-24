/* VARIABLES */
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];




cargarEventListeners();
function cargarEventListeners () {
    // Cuando agregas un curso presionando 'agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);
}


/* FUNCIONES */
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Lee el contenido del HTML al que le damos click y extre la info del curso(cursos)
function leerDatosCurso(curso){
    // console.log(curso);

    // Crear un objeto con el contenido del curso seleccionado
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Agrega elementos al arreglo de cursos del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    // console.log(articulosCarrito);
    carritoHTML();
}

// Muestra el Carrito de Compras en el HTML
function carritoHTML(){
    // Limpiar el HTML del carrito
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;
        
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los cursos del carrito , del tbody.
function limpiarHTML(params) {
    // contenedorCarrito.innerHTML = '';
// while para eliminar todos los elementos del tbody
    while (contenedorCarrito.firstChild) {  
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
