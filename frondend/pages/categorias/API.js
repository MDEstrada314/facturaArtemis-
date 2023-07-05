const urlCategorias = "http://localhost:4000/api/categorias"

export const getCategorias= async ()=>{
    try {
        const categorias = await fetch (urlCategorias);
        const datoCategorias = await categorias.json();
        console.log(datoCategorias);
        return datoCategorias;
    } catch (error) {
        console.log(error);
    }
}