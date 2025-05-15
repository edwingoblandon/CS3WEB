import React from 'react'
import { useState } from 'react'

export default function Appointments() {

  const [tipoCita, setTipoCita] = useState("")
  const [horario, setHorario] = useState("")
  const [fecha, setFecha] = useState("")

  return (
    <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        <div className='p-4 shadow rounded-custom w-50'>
            <h1 className='fw-bold text-dark text-center mb-4'>Agendar Cita</h1>
            <form>
              {/*Información dueño */}
              <h5 className='text-center text-secondary'>Información dueño</h5>
              <div className='mb-3'>
                  <label className='form-label text-dark'>Nombre</label>
                  <input type="text" className='form-control' placeholder='Ingrese su nombre'/>
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
                <label className="form-label text-dark">Número de teléfono 2</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Teléfono de un amigo/familiar" 
                />
              </div>
              {/*Información de la mascota*/}
              <h5 className='text-center text-secondary'>Información mascota</h5>

              <div className="mb-3">
                <label className="form-label text-dark">Nombre</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Ingrese el nombre de la mascota" 
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-dark">Raza</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Ingrese la raza" 
                />
              </div>

              <div className='mb-3'>
                <label className='form-label text-dark'>Tamaño</label>
                <select className='form-select' required>
                  <option value="">Seleccione un tamaño</option>
                  <option value="pequeño">Pequeño</option>
                  <option value="mediano">Mediano</option>
                  <option value="grande">Grande</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label text-dark">Observaciones de salud</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Alergias, Problemas de salud, etc."
                />
              </div>

              <div className='mb-3'>
                <label className='form-label text-dark'>Agresividad</label>
                <select className='form-select' required>
                  <option value="">Seleccione nivel de agresividad</option>
                  <option value="1">Muy tranquilo y sociable</option>
                  <option value="2">Inseguro y tímido</option>
                  <option value="3">Ocasionalmente agresivo</option>
                  <option value="4">Agresividad frecuente</option>
                  <option value="5">Muy agresivo</option>
                </select>
              </div>
              {/*Informacion tipo cita */}
              <div className='mb-3'>
                <h5 className='text-center text-secondary'>Información cita</h5>
                <label className='form-label text-dark'>Tipo de cita</label>
                <select className='form-select'
                value={tipoCita}
                onChange={(e) => setTipoCita(e.target.value)} 
                required
                >
                  <option value="">Seleccione un tipo de cita</option>
                  <option value="peluqueria">Peluqueria canina</option>
                  <option value="veterinaria">Veterinaria</option>
                  <option value="nutricionista">Nutricionista</option>
                </select>
              </div>
              {tipoCita === "peluqueria" && (
                
                <div className='form-control mb-3'>
                  <input 
                      type="checkbox" 
                      className='form-check-input me-2'
                  />
                  <label className='form-check-label'>Baño</label>
                  <br />
                  <input 
                      type="checkbox" 
                      className='form-check-input me-2'
                  />
                  <label className='form-check-label'>Corte de pelo</label>
                  <br />
                  <input 
                      type="checkbox" 
                      className='form-check-input me-2'
                  />
                  <label className='form-check-label'>Cepillado</label>
                  <br />
                  <input 
                      type="checkbox" 
                      className='form-check-input me-2'
                  />
                  <label className='form-check-label'>Corte de uñas</label>
                  <br />
                  <input 
                      type="checkbox" 
                      className='form-check-input me-2'
                  />
                  <label className='form-check-label'>Limpieza de Oídos</label>
                  
                  <br />
                  <input 
                      type="checkbox" 
                      className='form-check-input me-2'
                  />
                  <label className='form-check-label'>Tratamiento antipulgas</label>
                </div>
              )}
              <div className="mb-3">
                <label className="form-label text-dark">Fecha de la cita</label>
                <input
                  type="date"
                  className="form-control"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label text-dark">Horario</label>
                <select
                  className="form-select"
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                  required
                >
                  <option value="">Seleccione un horario</option>
                  <option value="08:00">08:00 AM</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>
              <input type="checkbox" className='form-check-input me-2' required/>
              <label className="form-check-label mb-3">Declaro que acepto y entiendo los <a className='text-decoration'>términos y condiciones.</a></label>
              <br />
              <input type="checkbox" className='form-check-input me-2' required/>
              <label className="form-check-label mb-3">Acepto las politicas de <a className='text-decoration'>tratamiento de datos personales.</a></label>
              
              <button className='btn btn-primary w-100'>Agendar cita</button>
            </form>
        </div>
    </div>
  )
}
