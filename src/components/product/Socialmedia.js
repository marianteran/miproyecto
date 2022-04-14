import React from 'react'
import { Link as LinkRouter } from "react-router-dom";


const Socialmedia = () => {
  return (
    <section id="appWeb">
                <h5>Socialmedia</h5>


                <div className="container appwebContainer">
                    <div className="appWebImage">
                        <div className="container__vector">
                            <img src="https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2020/06/Screenshot-5-1024x478.png" alt="" />
                        </div>
                    </div>

                    <div className="appWebContent">

                        <p>
                            Una aplicación Web es un conjunto de páginas Web estáticas y dinámicas. Una página Web estática es aquélla que no cambia cuando un usuario la solicita: el servidor Web envía la página al navegador Web solicitante sin modificarla. Por el contrario, el servidor modifica las páginas Web dinámicas antes de enviarlas al navegador solicitante. La naturaleza cambiante de este tipo de página es la que le da el nombre de dinámica.

                            Por ejemplo, podría diseñar una página para que mostrara los resultados del programa de salud y dejara cierta información fuera (como el nombre del empleado y sus resultados) para calcularla cuando la página la solicite un empleado en particular.
                        </p>

                        <LinkRouter to='/detalle' className="btn btn-outline-light ms-2">
                            <button className='btn btn-dark'>Info</button>
                        </LinkRouter>


                    </div>
                </div>


            </section>
  )
}

export default Socialmedia