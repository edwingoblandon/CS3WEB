import { getAllProducts, insertProduct, deleteProduct} from "../model/ProductoModel.js";

const getAllP = async (req, res) => {
    try {
        const productos = await getAllProducts();
        res.json(productos); 
    } catch (error) {
        console.error("Error al obtener productos: ", error);
        res.status(500).json({ message: "Error al obtener productos" });
    }
};

const createP = async (req,res) => {
    try {
        const {Nombre, Precio, Imagen, Descripcion} = req.body;
    
        if (!Nombre || !Precio || !Imagen){
            return res.status(400).json({message: "Nombre, Precio e Imagen son obligatorios"})
        }

        await insertProduct({Nombre,Precio,Imagen,Descripcion})
        res.status(201).json({message: "Producto creado exitosamente"})
    } catch (error) {
        console.error("Error al crear producto", error)
        res.status(500).json({message: "Error interno al crear producto"})
    }
}
/*
const deleteP = async (req,res) => {
    try {
        await deleteProduct(req.params)
        res.status(201).json({message: "Producto Eliminado exitosamente"})
    } catch (error) {
        console.error("Error al eliminar producto", error)
        res.status(500).json({message: "Error interno al eliminar producto"})
    }
}
*/
const deleteP = async (req, res) =>{
    try {
        await deleteProduct(req.params)
        res.status(201).json({message: 'Producto eliminado'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export { getAllP, createP, deleteP};