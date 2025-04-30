import React from 'react'

export default function Login() {
  return (
    <div className='container py-2'>
        <div className='d-flex justify-content-center align-items-center'>
            <div className="p-4 col-12 col-md-12 col-lg-5">
                <img src="https://i.ytimg.com/vi/LZnHjMOg1zc/sddefault.jpg" className='mb-1 rounded-custom w-100'/>
                <p className='text-secondary'>Accede a tu cuenta para gestionar tus servicios y productos</p>
                <form>
                    <input 
                        type="text" 
                        className='mb-3 form-control text-center' 
                        placeholder='Usuario'
                    />
                    <input 
                        type="password" 
                        className='mb-3 form-control text-center' 
                        placeholder='Contraseña'
                    />
                    <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold mb-3"
                    >Iniciar sesión
                    </button>
                    <div className='text-center '>
                        <a href='#' className='d-block fw-bold text-custom-purple mb-3'>Olvide mi contraseña</a>
                        <a href='#' className='d-block text-custom-purple mb-3'>¿No tienes una cuenta? Regístrate aqui</a>
                    </div>
                </form>

            </div>  
        </div>
    </div>
  )
}
