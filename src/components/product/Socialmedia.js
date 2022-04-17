import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import axios from 'axios'


const Socialmedia = () => {
    const [{ smedia }, dispatch] = useStateValue()

    return (
        <section id="socialMedia">
            <h5>Socialmedia</h5>

            <div className="socialMediaContainer">

                <div className="socialMediaContent">

                    <div className="socialMediaInfo">
                        <h5>Generación y diseño de tiendas online para que aumentes tus ventas</h5>

                        <p>Realizar ventas web no tiene que ser tan complicado. ¿Cómo conseguirlo? Nosotros hacemos la parte difícil . Te diseñamos y generamos tu tienda web para que puedas aumentar tus canales de venta y tu exposición.</p>
                   
                       
                    </div>

                    <LinkRouter to='/appMobile' className="container botonSocialMedia">
                            <div className="btnfluormedia">
                                <a href="">info</a>
                            </div>
                        </LinkRouter>

                  



                </div>


            </div>


        </section>
    )
}

export default Socialmedia