import  { useEffect, useState } from 'react'
import { ObtenerPorductos, CrearProducto, EliminarProducto} from '../services/ProductService'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import axios from 'axios';

export default function Products() {
 
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showListModal, setShowListModal] = useState(false)
  const [newProduct, setNewProduct] = useState({
    Nombre : '',
    Precio : '',
    Imagen : '',
    Descripcion : ''
  })

  useEffect(() =>{
    fetchProducts()
  }, [])

  const fetchProducts = async() => {
    const productsData = await ObtenerPorductos()
    try{
      setProducts(productsData)
      setLoading(false)
    }
    catch(error)  {
      console.error("Error al Cargar los productos: ", error)
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewProduct({...newProduct, [name]: value})
  }

  const handleAddProduct = async() =>{

    if(!newProduct.Nombre || !newProduct.Precio || !newProduct.Imagen){
      alert("Por favor completa todos los campos obligatorios");
      return
    }

    try{
      await CrearProducto(newProduct);
      fetchProducts()
      setShowCreateModal(false)
      setNewProduct({ Nombre: '', Precio: '', Imagen: '', Descripcion: '' })
      Swal.fire('Exitoso', 'Producto Registrado', 'success')

    }catch (error) {
      console.error("Error al agregar producto: ", error)
    }
  }

  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        EliminarProducto(id)
        .then(() => {
          fetchProducts();
          Swal.fire({
            title: "Eliminado!",
            text: "Se ha eliminado el producto.",
            icon: "success"
          });
        })
        .catch((error) => {
          console.error("Error eliminando el producto:", error.response || error);
          Swal.fire({
            title: "Error!",
            text: "Se produjo un problema al eliminar el producto. Inténtalo de nuevo más tarde.",
            icon: "error"
          });
        });
      }
    });
  };


  

  if (loading) {
    return <div>Cargando productos...</div>
  }

  return (
    <div  className='container'>
      <div className='d-flex justify-content-center '>
        <h1 className='fw-bold text-dark py-5'>Nuestros Productos</h1>
      </div>
      <div className="row d-flex justify-content-center py-3">
        <div className='d-flex justify-content-center mb-3'>

          <button className='btn btn-success fw-bold me-3' onClick={() => setShowCreateModal(true)}>➕ Agregar producto</button>
          <button className='btn btn-info fw-bold me-3' onClick={()=> setShowListModal(true)}>ℹ️ Mostrar lista de productos</button>
        </div>

        {products.map((product) => (
          <div key={product.Id} className="col-md-3 me-3 col-sm-12 mb-4 d-flex flex-column align-items-center text-center rounded-custom border border-medium p-3 shadow">
            <img className="w-75" src={product.Imagen} alt={product.Nombre} />
            <p className='fw-bold'>{product.Nombre}</p>
            <p className="text-custom-purple">{`$ ${product.Precio.toLocaleString()}`}</p>
            <button className="btn btn-primary mt-2 fw-bold">  
              Agregar al carrito
            </button>
            
          </div>
          /*Agregar en el boton la funcion para agregar al carrito */
        ))}
      </div>

      {showCreateModal &&(
          <div className='modal d-block'  role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className='modal-dialog' role='document'>
              <div className='modal-content'>
                <div className='modal-header justify-content-center'>
                  <h5 className='modal-title mx-auto'>Agregar nuevo producto</h5>
                  <button type='button' className='close end-0 rounded-custom bg-light border border-custom' onClick={() => setShowCreateModal(false)}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <input
                    type='text'
                    name = 'Nombre' 
                    placeholder='Nombre del producto'
                    className='form-control mb-2'
                    value={newProduct.Nombre}
                    onChange={handleChange}
                  />
                  <input 
                    type="number"
                    name='Precio'
                    placeholder='Precio'
                    className='form-control mb-2'
                    value={newProduct.Precio}
                    onChange={handleChange}
                  />
                  <input 
                    type="text" 
                    name='Descripcion'
                    className='form-control mb-2'
                    placeholder='Ingrese una descripcion (opcional)'
                    value={newProduct.Descripcion}
                    onChange={handleChange}
                  />
                  <input 
                    type="text"
                    name='Imagen'
                    className='form-control mb-2'
                    placeholder='URL de la imagen'
                    value={newProduct.Imagen}
                    onChange={handleChange}
                  />
                </div>
                <div className='modal-footer d-flex justify-content-center'>
                  <div className='d-flex'>
                    <button type='button' className='btn btn-danger me-5' onClick={() => setShowCreateModal(false)}>Cancelar</button>
                    <button type='button' className='btn btn-primary' onClick={handleAddProduct}>Guardar producto</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )}

      {showListModal && (
        <div className='modal d-block' role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content' >
                <div className='modal-header justify-content-center'>
                  <h5 className='modal-title mx-auto'>Lista de productos</h5>
                  <button type='button' className='close end-0 rounded-custom bg-light border border-custom' onClick={() => setShowListModal(false)}>
                    <span>&times;</span>
                  </button>
                </div>

                <div className='modal-body'>
                  <div className='table-responsive'>
                    <table className="table table-striped">
                      <thead>
                        <tr className='text-center'>
                          <th scope="col">Id</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Descripción</th>
                          <th scope="col">Precio</th>
                          <th scope='col'>URL Imagen</th>
                          <th scope='col'>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>

                        {products.map((product) => 
                          <tr key={product.Id} className='text-center'>
                            <td scope="row">{product.Id}</td>
                            <td scope="row">{product.Nombre}</td>
                            <td scope="row">{product.Descripcion}</td>
                            <td scope="row">${product.Precio}</td>
                            <td scope="row" className=''>
                              <div className='ms-4' style={{maxWidth:'200px' , overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                {product.Imagen}
                              </div>
                            </td>
                            <td scope="row">
                              <button className='btn btn-success rounded-custom mb-1 me-1'>Editar</button>
                              <button className='btn btn-danger rounded-custom' onClick={()=>handleDelete(product.Id)}>Eliminar</button>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}
