import axios from 'axios'

const api = 'http://localhost:3000/api/productos'

export const ObtenerPorductos = async() => {
    const listado = await axios.get(`${api}/listar`)
    return listado.data
}

export const CrearProducto = async (producto) => {
    const response = await axios.post(`${api}/crear`, producto);
    return response.data;
}

export const EliminarProducto = async(productoId) => {
    await axios.delete(`${api}/${productoId}`)
}

export const EditarProducto = async(producto) => {
   try {
    const { Id } = producto;
    if (!Id) throw new Error('Id del producto no definido');
    await axios.put(`${api}/${Id}`, producto);
  } catch (error) {
    console.error('Error al editar producto:', error);
    throw error;
  }
}
