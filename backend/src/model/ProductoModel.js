import {sql, getConnection } from "../config/Connection.js";

const getAllProducts = async () => {
    const connection  = await getConnection
    const result = await connection.request().query('SELECT * FROM Producto')
    return result.recordset
}


const insertProduct = async(product) =>{
    const {Nombre, Precio, Imagen, Descripcion} = product
    
    const descripcionValue = Descripcion && Descripcion.trim() !== "" ? Descripcion : null;
    const connection  = await getConnection

    await connection.request()
        .input('Nombre', Nombre)
        .input('Precio', Precio)
        .input('Imagen', Imagen)
        .input('Descripcion', descripcionValue)
        .input('Nit', 123)
        .execute('sp_insertar_producto')
}

const deleteProduct = async (product) =>{
    const {Id} = product
    const con = await getConnection
    await con.request()
    .input('Id', sql.Int, Id)
    .execute('sp_eliminar_producto')
    
}

const editProduct = async (product) =>{
    const {Id,Nombre, Precio, Imagen, Descripcion} = product
    const connection = await getConnection
    const descripcionValue = Descripcion && Descripcion.trim() !== "" ? Descripcion : null;

    await connection.request()
    .input('Id', sql.Int, Id)
    .input('Nombre', Nombre)
    .input('Precio', Precio)
    .input('Imagen', Imagen)
    .input('Descripcion', descripcionValue)
    .input('Nit', 123)
    .execute('sp_editar_producto')
    
}
export {getAllProducts, insertProduct, deleteProduct, editProduct}