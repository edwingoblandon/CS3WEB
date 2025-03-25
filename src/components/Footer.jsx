import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div>
        <footer className=" text-center py-2">
            <div className="container">
                <div className="row border-top border-medium pt-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="text-custom-purple">Contactos</h6>
                        <p className="text-dark mb-0">Teléfono: 604 294 0311 WhatsApp: 318 754 0828</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="text-custom-purple">Horarios</h6>
                        <p className="text-dark">Lunes a Sábado de 08:00 a.m a 6:00 p.m</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">

                    </div>
                    <div className="d-flex justify-content-between align-items-center">

                        <h6 className="text-custom-purple">Redes Sociales</h6>
                        <p>
                            <a href="" className='me-3 text-decoration-none text-custom-purple'>Facebook</a>
                            <a href="" className='text-decoration-none text-custom-purple'>Instagram</a>
                        </p> 
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="text-custom-purple">Tu Tienda Niau Guau</h6>
                    <p className="text-dark">
                    Siendo tu mejor aliado en cuidado y estilo para tu mascota.
                    </p>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center mt-4 gap-3">
                <div className="d-flex gap-3">
                <Link to="/privacy" className="text-custom-purple text-decoration-none">Política de Privacidad</Link>
                <Link to="/terms" className="text-custom-purple text-decoration-none">Términos y Condiciones</Link>
                </div>
                <p className="text-custom-purple">© 2025 Tu Tienda Niau Guau</p>
            </div>
        </div>
    </footer>
    </div>
  )
}
