import React from 'react'


const products = [
  {id: 1, name: "Arena para gatos", price: "$8.990", img: "/products/producto-1.png"},
  {id: 2, name: "Guante para pelaje", price: "$25.990", img: "/products/producto-2.png"},
  {id: 3, name: "Juguete rasca encias", price: "$9.990", img: "/products/producto-3.png"},
  {id: 4, name: "Urinay care", price: "$45.000", img: "/products/producto-4.png"},
  {id: 5, name: "Shampoo Petys", price: "$17.900", img: "https://petys.com/wp-content/uploads/2024/10/Shampoo-limpieza-suavidad.webp"},
  {id: 6, name: "Tapetes absorbentes Petys", price: "$10.000", img: "/products/producto-6.png"}
];

export default function Products() {
  return (
    <div  className='container'>
      <div className='d-flex justify-content-center'>
        <h1 className='fw-bold text-dark py-5'>Nuestros Productos</h1>
      </div>
      <div className="row d-flex justify-content-center py-3">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 me-3 col-sm-12 mb-4 d-flex flex-column align-items-center text-center rounded-custom border border-medium p-3">
            <img className="w-75" src={product.img} alt={product.name} />
            <p className='fw-bold'>{product.name}</p>
            <p className="text-custom-purple">{product.price}</p>
            <button className="btn btn-primary mt-2 fw-bold">  
              Agregar al carrito
            </button>
          </div>
          /*Agregar en el boton la funcion para agregar al carrito */
        ))}
      </div>
     
    </div>
  )
}
