import { getAllProducts, insertProduct } from "../model/ProductoModel.js";

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

export { getAllP, createP};