import { obtainCategories, createCategories } from "../apiConnection/consumeAPI.js";
import { obtainProducts } from "../apiConnection/productAPI.js";

document.querySelector('#showCategories').addEventListener('click', () => {
    document.querySelector('#div3').style.display = 'block';
    document.querySelector('#div4').style.display = 'none';
});

document.querySelector('#showProducts').addEventListener('click', () => {
    document.querySelector('#div3').style.display = 'none';
    document.querySelector('#div4').style.display = 'block';
});

document.querySelector('#formulario').addEventListener("submit", (e) => {
    e.preventDefault();

    const CategoriaNombre = document.querySelector("#nombre").value;
    const Descripcion = document.querySelector("#descripcion").value;
    const Imagen = document.querySelector("#imagen").value;

    const newCategory = {
        CategoriaNombre,
        Descripcion,
        Imagen
    };

    postCategories(newCategory);
})

document.addEventListener("DOMContentLoaded", () => {
    getCategories();
    getProducts();
})

async function getCategories() {
    const categoriesObtained = await obtainCategories();
    const container = document.querySelector('#categoriesTableBody');
    categoriesObtained.forEach((category) => {
        const { CategoriaID, CategoriaNombre, Descripcion, Imagen } = category
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${CategoriaID}
            </td>
            <td>
                ${CategoriaNombre}
            </td>
            <td>
                ${Descripcion}
            </td>
            <td>
                <img src="${Imagen}" width="100px" class="cuenta">
            </td>
            <td>
                <button class="btn color3">Details</button>
            </td>
            <td>
                <button class="btn color2">Edit</button>
            </td>
            <td>
                <button class="btn color5">Delete</button>
            </td>
        `;
        container.appendChild(row)
    })
}

async function postCategories(category) {
    try {
        const categoriesObtained = await createCategories(category);
        if (createCategories) {
            console.log("Categoria creada:", categoriesObtained);
            document.querySelector('#formulario').reset();
            document.querySelector('#categoriesTableBody').innerHTML = "";
            alert("Producto creado con exito")
            getCategories();
        }
    } catch (error) {
        console.error("Error al guardar la categoría:", error);
    }
}

async function getProducts() {
    const productsObtained = await obtainProducts();
    const container = document.querySelector('#productsTableBody');
    productsObtained.forEach((product) => {
        const { ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado } = product
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${ProductoID}
            </td>
            <td>
                ${ProductoNombre}
            </td>
            <td>
                ${ProveedorID}
            </td>
            <td>
                ${CategoriaID}
            </td>
            <td>
                ${CantidadPorUnidad}
            </td>
            <td>
                ${PrecioUnitario}
            </td>
            <td>
                ${UnidadesStock}
            </td>
            <td>
                ${UnidadesPedidas}
            </td>
            <td>
                ${NivelReorden}
            </td>
            <td>
                ${Discontinuado === 1 ? 'Sí' : 'No'}
            </td>
            <td>
                <button class="btn color3">Details</button>
            </td>
            <td>
                <button class="btn color2">Edit</button>
            </td>
            <td>
                <button class="btn color5">Delete</button>
            </td>
        `;
        container.appendChild(row)
    })
}