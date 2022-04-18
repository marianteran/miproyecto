import React from 'react'
import Carousel from './Carousel'

const Hero = () => {
  return (
    <>
  

      <section id='hero-dos'>
        <div className='hero-container-dos'>

          <div className='hero-text'>
            <h6>CREA TU SITIO WEB</h6>
            <h1> El líder en diseño de páginas web</h1>
            <p>Crea una página web profesional, una tienda online o un portafolio y construye tu presencia online. Con nosotros, puedes hacer realidad cualquier idea.</p>
            <div className="container botonhome ">
              <div className="btnfluor">
                <a href="">read more</a>
              </div>
            </div>
          </div>

          <div className='hero-slider'>

            <Carousel />
          </div>

        </div>

      </section>

    </>
  )
}

export default Hero