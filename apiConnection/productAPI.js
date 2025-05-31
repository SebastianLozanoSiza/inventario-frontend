const url = "https://inventario-ueoa.onrender.com/api/productos";

export const obtainProducts = async () => {
    try{
        const resultado = await fetch(url);
        const productos = await resultado.json();
        return productos;
    }catch(error){
        console.error("error");
    }
}

