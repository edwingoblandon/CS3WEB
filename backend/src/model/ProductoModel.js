import { getConnection } from "../config/Connection.js";

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
        .query('INSERT INTO Producto (Nombre, Descripcion, Precio, Imagen, Nit) VALUES (@Nombre, @Descripcion, @Precio, @Imagen, @Nit)')
}

export {getAllProducts, insertProduct}