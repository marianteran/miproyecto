import React from 'react'
import { Link, Link as LinkRouter } from "react-router-dom";

const Respuesta = () => {
    return (
        <div>
            <div className='home-frase'>

                <h1>

                    En breve le responderemos
                </h1>

                <div className="container botonhome ">
                    <div className="btnfluor">

                        <LinkRouter to="/product">read more</LinkRouter>
                    </div>
                </div>



            </div >

        </div>
    )
}

export default Respuesta