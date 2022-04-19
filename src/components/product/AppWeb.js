import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import appweb from './website1.jpeg'

const AppWeb = () => {

    return (
        <>

            <section id="appWeb">
                <div className="container">
                    <div className='subtitle-principal '>
                        <h2>Aplicaciones Web</h2>
                    </div>
                </div>


                <div className="container appwebContainer">

                    <div className="appWebContent">

                        <h4>
                            Diseñamos tu sitio para renovar tu imagen y presencia online. </h4>

                        <p>
                            ¿Necesitas generar más ventas? Desarrollamos Sitios Web Institucionales. Landing Pages
                            Adaptables a todas las pantallas. Diseño de páginas web claras, atractivas y efectivas
                            que te ayudarán a dar la mejor imagen de tu negocio.
                        </p>





                    </div>
                    <div className="appWebImage">
                        <div className="container__vector">
                            <img src={appweb} alt="" />
                        </div>
                    </div>


                </div>


                <LinkRouter to='/appWeb' className="container botonPC">
                    <div className="btnfluorPC">
                        <a href="">info</a>
                    </div>
                </LinkRouter>


            </section>

        </>
    )
}

export default AppWeb