import React, { useState } from 'react';

export default function Contact() {
  const [opcionContacto, setOpcionContacto] = useState("");

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="p-4 rounded-custom shadow w-50 ">
          <h1 className="text-dark text-center fw-bold mb-4">Contáctanos</h1>
          <form>

            <div className="mb-3">
              <label className="form-label text-dark">Nombre completo</label>
              <input type="text" className="form-control" placeholder="Ingrese su nombre" />
            </div>
            
            <div className="mb-3">
              <label className="form-label text-dark">Correo electrónico</label>
              <input
                type="email" 
                className="form-control" 
                placeholder="suemail@ejemplo.com" 
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Número de teléfono</label>
              <input 
                type="text" 
                className="form-control"
                placeholder="Ingrese su teléfono" 
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label text-dark">Asunto</label>
              <select className="form-select">
                <option>Información sobre productos</option>
                <option>Soporte</option>
                <option>Otro</option>
              </select>
            </div>
            
            <div className="mb-3">
              <label className="form-label text-dark">Mensaje</label>
              <textarea className="form-control" rows="4" placeholder="Aqui puede agregar detalles"></textarea>
            </div>
            
            <div className="mb-3">
              <label className='form-label text-dark'>¿Cómo prefieres el contacto?</label>
              <div className='form-switch'>
                <input
                  type='radio'
                  name='contacto'
                  value="llamenme"
                  onChange={() => setOpcionContacto("llamenme")}
                  className='form-check-input me-2'
                />
                <label className='form-check-label text-black'>Quiero que me llamen</label>
              </div>

              <div className='form-switch'>
                <input
                type='radio'
                name='contacto'
                value="llamoyo"
                onChange={() => setOpcionContacto("llamoyo")}
                className='form-check-input me-2'
                />
                <label className='form-check-label text-dark'>Prefiero llamar yo</label>
              </div>

              <div className='form-switch'>
                <input 
                    type="radio"
                    name="contacto" 
                    className='form-check-input me-2'
                    onChange={() => setOpcionContacto("email")}
                />
                <label className='form-check-label'>Contactenme por correo electrónico</label>
              </div>
            </div>

            {opcionContacto === "llamenme" && (
              <div className='mb-3'>
                <label className='form-label text-dark'>Selecciona un horario de llamada</label>
                <select className='form-select'>
                  <option value="">Seleccione un horario</option>
                  <option value="9-11">9:00 AM - 11:00 AM</option>
                  <option value="11-13">11:00 AM - 1:00 PM</option>
                  <option value="14-16">2:00 PM - 4:00 PM</option>
                  <option value="16-18">4:00 PM - 6:00 PM</option>
                </select>
              </div>
            )}

            {opcionContacto === "llamoyo" && (
              <div className='alert alert-info'>
                LLámanos al <strong> 604 294 0311</strong> en horario de atención.
              </div>
            )}
            
            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold"
              disabled = {opcionContacto === "llamoyo"}
              >Solicitar contacto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
