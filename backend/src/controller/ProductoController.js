import { getAllProducts, insertProduct, deleteProduct, editProduct} from "../model/ProductoModel.js";

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

const deleteP = async (req, res) =>{
    try {
        await deleteProduct(req.params)
        res.status(201).json({message: 'Producto eliminado'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const editP = async (req,res) => {
    
    try {
        const {Id} = req.params
        const {Nombre, Precio, Imagen, Descripcion} = req.body;
        
        if (!Nombre || !Precio || !Imagen){
            return res.status(400).json({message: "Nombre, Precio e Imagen son obligatorios"})
        }

        await editProduct({Id,Nombre,Precio,Imagen,Descripcion})
        res.status(201).json({message: "Producto editado exitosamente"})
        
    } catch (error) {
        console.error("Error al editar producto", error)
        res.status(500).json({message: "Error interno al editar producto"})
    }
}

export { getAllP, createP, deleteP, editP};