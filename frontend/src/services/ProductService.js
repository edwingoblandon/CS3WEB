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