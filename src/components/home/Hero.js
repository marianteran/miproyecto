import React from 'react'
import Carousel from './Carousel'

const Hero = () => {
  return (
    <>
  

      <section id='hero-dos'>
        <div className='hero-container-dos'>

          <div className='hero-text'>
            <h6>CREATE YOUR WEBSITE</h6>
            <h1>The leader in web page design</h1>
            <p>Create a professional website, online store or portfolio and build your online presence. With us, you can make any idea come true.</p>
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