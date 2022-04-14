import React from 'react'
import Hero from './Hero'
import HeroGothic from './HeroGothic'
import './home.css'

const Home = () => {
    return (
        <>
            <Hero />

     
            <div className='homeMain'>

                <div className='homeImage'>
                <h6>Prueba ele</h6>
                    <img src='https://www.jimdo.com/static/3e429504c49b797f94016ad1a6709112/b8073/style.webp'></img>
                </div>


                <div className='homeDescrip'>
                    <h2>
                        Consigue tu página web fácilmente
                    </h2>

                    <p>Al principio te hacemos unas cuantas preguntas para conocerte. A continuación, en función de tu sector profesional, combinamos tu información con los contenidos creados por nuestros profesionales. El resultado es una página web única con textos, fotos y tu propia información, totalmente lista para presentarse y adaptada a tu negocio.</p>

                </div>

            </div>

            <div className='homeImgFixed'>


            </div>

            <HeroGothic/>


            <section id='all-need'>
                <div>
                    <h1>TODO LO QUE NECESITAS</h1>

                    <div className='allNeed'>
                        <div className='allNeedContent'>
                            <h5>ADAPTADO PARA MÓVILES</h5>
                            <p>Tu página se verá perfecta en cualquier dispositivo, ya sea un teléfono, una tableta o un ordenador.</p>                            
                        </div>
                        <div className='allNeedContent'>
                            <h5>REGISTRO GRATUITO</h5>
                            <p>Puedes registrarte de manera gratuita; no se requiere tarjeta de crédito. Es libre de riesgos..</p>                            
                        </div>
                        <div className='allNeedContent'>
                            <h5>SOPORTE RÁPIDO Y PERSONALIZADO</h5>
                            <p>Hemos ayudado a lanzar millones de páginas web y estamos listos para hacer que la tuya también sea un éxito.</p>                            
                        </div>

                    </div>
                    <div className='allNeed'>
                        <div className='allNeedContent'>
                            <h5>CONEXIÓN SEGURA HTTPS</h5>
                            <p>Disfruta de la tranquilidad de saber que los datos de tu sitio web y de tus visitantes están protegidos por el protocolo de cifrado HTTPS..</p>                            
                        </div>
                        <div className='allNeedContent'>
                            <h5>DOMINIO PERSONALIZADO</h5>
                            <p>Agregar una dirección personal a tu página web es fácil y, en la mayoría de los casos, puedes usar una que ya tengas.</p>                            
                        </div>
                        <div className='allNeedContent'>
                            <h5>DISEÑOS FLEXIBLES</h5>
                            <p>Adiós a plantillas planas y aburridas: siempre tendrás el control de lo que hay en tu página web.</p>                            
                        </div>

                    </div>
               



                </div>

            </section>




           



        </>
    )
}

export default Home