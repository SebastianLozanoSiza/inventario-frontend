const url = "https://inventario-ueoa.onrender.com/api/categorias";

export const obtainCategories = async () => {
    try{
        const resultado = await fetch(url);
        const categorias = await resultado.json();
        return categorias;
    }catch(error){
        console.error("error");
    }
}

export const createCategories = async (category) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        });

        if (!response.ok) {
            throw new Error("Error al crear la categoría");
        }

        return await response.json();
    } catch (error) {
        console.error("Error al crear categoría:", error);
    }
};
