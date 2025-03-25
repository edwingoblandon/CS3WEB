import React from 'react'

export default function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
            <img className='rounded-custom width-custom-h' src="https://img.freepik.com/foto-gratis/hermoso-retrato-mascota-perro_23-2149218454.jpg" alt="Amor y Estilo Canino" />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold text-dark mt-3">Amor y Estilo Canino</h1>
          <p className="text-dark">
            Nuestro compromiso es cuidar, brindar amor y calidad, adaptándonos
            a la necesidad de su mascota mientras realizamos un trabajo de
            calidad. Con servicios de estilismo canino, peluquería y más,
            buscamos siempre la satisfacción de nuestros clientes.
          </p>
          <div className='d-flex justify-content-center'>
            <button className="btn btn-primary fw-bold mt-3">Conoce Más</button>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center py-5'>
        <div className="d-flex flex-column align-items-center col-md-3 mt-4 me-5 text-center">
          <img className='rounded-custom width-custom-f' src="https://img.freepik.com/fotos-premium/feliz-medico-veterinario-abraza-cachorro-clinica-veterinaria-espacio-vacio-texto_255667-9715.jpg" alt="¿Cómo te ayudo?" />
          <h5 className='fw-bold mt-3'>¿Cómo te ayudo?</h5>
          <p className='text-muted'>Servicios adaptados a las necesidades de tu mascota.</p>
        </div>
        <div className=" d-flex flex-column align-items-center col-md-3 mt-4 ms-5 me-5 text-center">
          <img className='rounded-custom width-custom-f' src="https://panchoskitchen.com/cdn/shop/files/Banner-02_panchos.jpg?v=1685743414&width=3840" alt="Promociones de temporada" />
          <h5 className='fw-bold mt-3'>Promociones de temporada</h5>
          <p className='text-muted'>Aprovecha nuestras ofertas.</p>
        </div>
        <div className=" d-flex flex-column align-items-center col-md-3 mt-4 ms-5 text-center">
          <img className='rounded-custom width-custom-f' src='https://img.freepik.com/foto-gratis/vista-superior-reloj-pared-bodegon_23-2150417301.jpg' alt="Horarios de atención" />
          <h5 className='fw-bold mt-3'>Horarios de atención</h5>
          <p className='text-muted'>De lunes a sábado, 9 AM - 8 PM.</p>
        </div>
      </div>
    </div>
  )
}
