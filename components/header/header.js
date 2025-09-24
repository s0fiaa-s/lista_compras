import { descarga } from "../../control/descarga.js";

export function header() {
    let header = document.createElement('header'); 
    header.className = "header";
    let text = document.createElement('text'); 
    text.className = "titulo"; 
    text.innerHTML = "Lista de Compras";

    let div = document.createElement('div'); 
    div.className = "descargarlogo"; 
    div.innerHTML = "⬇️ "; 
    div.style.cursor = "pointer";
    div.addEventListener("click", () => {
    descarga("miContenedor"); 
    });
    
    header.appendChild(text); 
    header.appendChild(div); 
 
 return header;}
