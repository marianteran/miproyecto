import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import axios from 'axios'
import CarouselPc from './CarouselPc'

const Pc = () => {

    return (
        <div>
            <section id="pc">
                <div className="container">
                    <div className='subtitle-principal-pc '>
                        <h2>Equipos</h2>
                    </div>
                </div>


                <div className="container pcContainer">

                    <div className="pcContent">

                        <h4>Te brindamos  accesoria en todo lo que necesitas  </h4>
                        <p>
                            Ofrecemos una variedad de equipos para ayudarte a ingresar en el mundo de la tecnología,
                            con los mejores precios y personal
                            altamente calificado para brindarte el mejor servicio
                        </p>


                    </div>
                    <div className="pcCarousel">
                        <CarouselPc />
                    </div>
                </div>
                <LinkRouter to='/equipments' className="container botonPC">
                    <div className="btnfluorPC">
                        <a href="">info</a>
                    </div>
                </LinkRouter>

            </section>

        </div>
    )
}

export default Pc