import  { useEffect, useState } from 'react'
import { ObtenerPorductos, CrearProducto, EliminarProducto, EditarProducto} from '../services/ProductService'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';

export default function Products() {
 
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showListModal, setShowListModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredProducts = products.filter(product =>
    product.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddProduct = async() =>{

    if(!newProduct.Nombre || !newProduct.Precio || !newProduct.Imagen){
      Swal.fire({
      title: "Completa los campos",
      text: "Debes completar todos los campos obligatorios antes de continuar.",
      icon: "info"
    });
      return
    }

    try{
      await CrearProducto(newProduct);
      fetchProducts()
      setShowCreateModal(false)
      setNewProduct({ Nombre: '', Precio: '', Imagen: '', Descripcion: '' })
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto creado con exito!",
        showConfirmButton: true,
        timer: 1500
      });

    }catch (error) {
      console.error("Error al agregar producto: ", error)
    }
  }

  const handleEdit = async (Id) => {
    const productToEdit = products.find(product => product.Id === Id);

    if (!productToEdit) {
      Swal.fire('Producto no encontrado', '', 'error');
      return;
    }

    const { value: formValues } = await Swal.fire({
      title: "Editar producto",
      html: `
        <h6 class="alert alert-info fw-bold">Id: ${Id}</h6>
        <input id="swal-input1" class="form-control mb-2" placeholder="Nombre del producto" value="${productToEdit.Nombre}">
        <input id="swal-input2" class="form-control mb-2" placeholder="Precio" type="number" value="${productToEdit.Precio}">
        <input id="swal-input3" class="form-control mb-2" placeholder="Descripción (opcional)" value="${productToEdit.Descripcion || ''}">
        <input id="swal-input4" class="form-control mb-2" placeholder="URL de la imagen" value="${productToEdit.Imagen}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Guardar producto",
      customClass: {
        popup: 'swal2-popup-custom',
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      preConfirm: () => {
        const nombre = document.getElementById("swal-input1").value;
        const precio = document.getElementById("swal-input2").value;
        const descripcion = document.getElementById("swal-input3").value;
        const imagen = document.getElementById("swal-input4").value;

        if (!nombre || !precio || !imagen) {
          Swal.showValidationMessage("Debes completar Nombre, Precio e Imagen");
          return false;
        }

        return { Id, Nombre: nombre, Precio: precio, Descripcion: descripcion, Imagen: imagen };
      }
    });

    if (formValues) {
      try {
        await EditarProducto(formValues);
        Swal.fire('Producto editado exitosamente!', '', 'success');
        fetchProducts();
      } catch (error) {
        console.error("Error al editar producto:", error);
        Swal.fire('Error', 'No se pudo editar el producto.', 'error');
      }
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
      {/*Barra de busqueda*/}
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="row d-flex justify-content-center py-3">
        <div className='d-flex justify-content-center mb-3'>

          <button className='btn btn-success fw-bold me-3' onClick={() => setShowCreateModal(true)}>➕ Agregar producto</button>
          <button className='btn btn-info fw-bold me-3' onClick={()=> setShowListModal(true)}>ℹ️ Mostrar lista de productos</button>
        </div>

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.Id} className="col-md-3 me-3 col-sm-12 mb-4 d-flex flex-column align-items-center text-center rounded-custom border border-medium p-3 shadow">
              <img className="w-75" src={product.Imagen} alt={product.Nombre} />
              <p className="fw-bold">{product.Nombre}</p>
              <p className="text-custom-purple">{`$ ${new Intl.NumberFormat('es-ES').format(product.Precio)}`}</p>
              <button className="btn btn-primary mt-2 fw-bold">
                Agregar al carrito
              </button>
            </div>
          ))
        ) : (
          <p className='alert alert-info fw-bold'>No se encontraron productos que coincidan con la búsqueda.</p>
        )}
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
                              <button className='btn btn-success rounded-custom mb-1 me-1' onClick={() => handleEdit(product.Id)}>Editar</button>
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
