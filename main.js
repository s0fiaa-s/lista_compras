import { Formulario } from "./components/formulario/formulario.js";
import { header } from "./components/header/header.js";
import { seccion1 } from "./components/seccion/seccion1.js";
import { obtenerLista, guardarLista } from "./control/Storage.js";

function seccion(){

    let seccion = document.createElement('section');


    let listaProductos = obtenerLista();

    //LocalStorange

    if (!listaProductos.length === 0) {
        listaProductos = [];
        guardarLista(listaProductos);
    } 
    console.log(listaProductos);

    //header
    seccion.appendChild(header());

    //seccion1
    seccion.appendChild(seccion1());

    //formulario
    seccion.appendChild(Formulario());

    return seccion;

}

// 🔹 Aquí apuntamos al root
const root = document.querySelector('#root');
root.appendChild(seccion());