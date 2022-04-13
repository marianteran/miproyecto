import React from 'react'
import Carousel from './Carousel'

const Hero = () => {
  return (
    <>
      <div className='hero-container'>

        <p className='hero-title'>SOMOS TU MEJOR ELECCION</p>
        <p className='hero-title'>prueba ele</p>

        


      </div>

      <section id='hero-dos'>
        <div className='hero-container-dos'>

          <div className='hero-text'>
            <h6>CREA TU SITIO WEB</h6>
            <h1> El líder en diseño de páginas web</h1>
            <p>Crea una página web profesional, una tienda online o un portafolio y construye tu presencia online. Con nosotros, puedes hacer realidad cualquier idea.</p>
            <button className='btn btn-primary'>Comenzar</button>
          </div>

          <div className='hero-slider'>

            <Carousel/>
          </div>



        </div>

      </section>


      <section className='hero-tres'>
        <div class='heroimage'>
          <div class="captioncontainer">
            <h1 class="captiontitle">
              OFF TO WHERE?
              OFF TO WHERE?
              OFF TO WHERE?
              OFF TO WHERE?
            </h1>
            <h2 class="captiontitle">
              WHO REALLY KNOWS.
            </h2>
          </div>
        </div>


      </section >








        </>
        )
}

export default Hero