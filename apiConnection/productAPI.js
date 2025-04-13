const url = "http://localhost:5000/api/productos";

export const obtainProducts = async () => {
    try{
        const resultado = await fetch(url);
        const productos = await resultado.json();
        return productos;
    }catch(error){
        console.error("error");
    }
}

