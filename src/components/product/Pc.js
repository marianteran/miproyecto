import React from 'react'
import CarouselPc from './CarouselPc'
import { Link as LinkRouter } from "react-router-dom";

const Pc = () => {
    return (
        <div>
            <section id="pc">
                <h5>PC</h5>


                <div className="container pcContainer">

                    <div className="pcContent">
                        <p>
                            Una aplicación Web es un conjunto de páginas Web estáticas y dinámicas. Una página Web estática es aquélla que no cambia cuando un usuario la solicita: el servidor Web envía la página al navegador Web solicitante sin modificarla. Por el contrario, el servidor modifica las páginas Web dinámicas antes de enviarlas al navegador solicitante. La naturaleza cambiante de este tipo de página es la que le da el nombre de dinámica.
                            Por ejemplo, podría diseñar una página para que mostrara los resultados del programa de salud y dejara cierta información fuera (como el nombre del empleado y sus resultados) para calcularla cuando la página la solicite un empleado en particular.
                        </p>
                        <LinkRouter to='/detalle' className="btn btn-outline-light ms-2">
                            <button className='btn btn-dark'>Info</button>
                        </LinkRouter>

                    </div>

                    <div className="pcCarousel">
                        <CarouselPc />
                    </div>




                </div>


            </section>

        </div>
    )
}

export default Pc