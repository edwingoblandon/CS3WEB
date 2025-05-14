import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header className="d-flex align-items-center justify-content-between border-bottom border-medium px-3 py-3">
            <div className="d-flex align-items-center text-dark">
                <Link to={'/'} ><img src="/Logo.png" alt="Logo"  width='60px'/></Link>
                <h2 className="text-dark fw-bold fs-5 mt-2">Tu Tienda Niau Guau</h2>
            </div>
            <div className="d-flex flex-grow-1 justify-content-end gap-4">
                <nav className="d-flex align-items-center gap-3">
                    <Link to='/' className='text-dark fw-medium text-decoration-none'>Inicio</Link>
                    <Link to='/products' className='text-dark fw-medium text-decoration-none'>Productos</Link>
                    <Link to='/contact' className='text-dark fw-medium text-decoration-none'>Contacto</Link>
                    <Link to='/appointments' className='text-dark fw-medium text-decoration-none'>Agendar cita</Link>
                </nav>
                <button className="btn btn-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", backgroundColor: "#e8e8e8"}}>
                    <img src="https://static.thenounproject.com/png/4238597-200.png" style={{width:"30px" }} className='rounded-custom'/>
                </button>
            </div>
        </header>
    </div>
  )
}
