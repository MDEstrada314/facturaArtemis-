import { getCategorias } from "./API.js";

addEventListener("DOMContentLoaded",()=>{
    categorias();
})



async function categorias(){
    const datosCategorias = await getCategorias();
    console.log(datosCategorias);
    
    const tabla = document.querySelector('#tabla')
 

    datosCategorias.forEach(element => {
        const {CategoriaID,CategoriaNombre,Descripcion,Imagen}= element
        tabla.innerHTML+=`
        <tr>
          <th scope="row">${CategoriaID}</th>
          <td><i class="bi bi-bar-chart-line-fill"></i></td>
          <td>
            <div class="circulo"></div>
          </td>
          <td>${CategoriaNombre}</td>
          <td>${Descripcion}</td>
          <td>${Imagen}</td>
          <td ><button type="button" class="btn btn-success mx-2 ">Actualizar</button><button type="button"
              class="btn btn-danger">Borrar</button></td>
        </tr>
        
        `
        
    });
}