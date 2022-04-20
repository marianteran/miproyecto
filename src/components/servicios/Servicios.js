import React, { useEffect } from 'react'
import { Link as LinkRouter } from "react-router-dom";


import './servicios.css';
import capacitacion from "./capacitacion.jpeg";
import  mantenimiento from "./mantenimiento.jpg";
import metricas from "./metricas.jpg";
import  soporte from "./soporte.jpeg"


const Servicios = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (

        <>
         <section className='section2'>
                <div className='banner'>
                    <div className='tittlebanner'>
                    <h1>Podemos ayudarte</h1>
                    <p>¿ESTÁS OBTENIENDO LO MEJOR DE TU INFRAESTRUCTURA INFORMÁTICA?</p>   
                    </div>
                                     

                </div>
            </section>
            <section id="appMobile">
                <div>
                    <div className="container">
                        <div className='subtitle-principal-mobile '>
                            <h2>Capacitaciones</h2>
                        </div>
                    </div>


                    <div className="container appMobileContainer">
                        <div className="appMobileImage">

                            <img src={capacitacion} alt="" />

                        </div>

                        <div className="appMobileContent">

                            <h4 id="txt">Permítenos hacer el trabajo de encontrarte al experto perfecto para que puedas destacar</h4>


                            <p>
                                Los SEOMA Experts son desarrolladores independientes con experiencia.
                                Seleccionados según sus años de experiencia y la calidad de su trabajo,
                                los Experts pueden ayudarte a pulir un sitio existente o crear un sitio nuevo desde cero. </p>



                            <LinkRouter to='/capacitaciones' className="container botonAppMobile">
                                <div className="btnfluor">
                                    <a href="">info</a>
                                </div>
                            </LinkRouter>


                        </div>
                    </div>
                </div>




                <div>
                    <div className="container">
                        <div className='subtitle-principal-mobile '>
                            <h2>Mantenimiento</h2>
                        </div>
                    </div>


                    <div className="container appMobileContainer">
                        <div className="appMobileImage">

                            <img src={mantenimiento} alt="" />

                        </div>

                        <div className="appMobileContent">

                            <h4 id="txt">Para tu App Web o Página Web</h4>


                            <p>SEOMA nos permite crear todo tipo de webs y gestionar contenido de forma eficaz.
                                Pero también requiere mantenimiento constante para no tener ningún tipo de problema a medio y largo plazo.
                                Libere su mente de preocupaciones y enfóquese solo en lo importante para su negocio.
                                Cubrimos todos los aspectos de mantenimiento que son necesarios para que una web funcione correctamente,
                                con buena performance y seguridad. </p>



                            <LinkRouter to='/mantenimiento' className="container botonAppMobile">
                                <div className="btnfluor">
                                    <a href="">info</a>
                                </div>
                            </LinkRouter>


                        </div>
                    </div>
                </div>


                <div>
                    <div className="container">
                        <div className='subtitle-principal-mobile '>
                            <h2>Analisis de Métricas</h2>
                        </div>
                    </div>


                    <div className="container appMobileContainer">
                        <div className="appMobileImage">

                            <img src={metricas} alt="" />

                        </div>

                        <div className="appMobileContent">

                            <h4 id="txt">Comprende el rendimiento de tu sitio web</h4>


                            <p>
                                Obtén información útil y detallada sobre quién visita tu página web
                                y cómo interactúan con tu contenido gracias a nuestras herramientas de analítica web. </p>



                            <LinkRouter to='/analisisM' className="container botonAppMobile">
                                <div className="btnfluor">
                                    <a href="">info</a>
                                </div>
                            </LinkRouter>


                        </div>
                    </div>
                </div>




                <div>
                    <div className="container">
                        <div className='subtitle-principal-mobile '>
                            <h2>Soporte Técnico</h2>
                        </div>
                    </div>


                    <div className="container appMobileContainer">
                        <div className="appMobileImage">

                            <img src={soporte} alt="" />

                        </div>

                        <div className="appMobileContent">

                            <h4 id="txt">Elevá el nivel de tu organización</h4>


                            <p>
                                Servicio de soporte on-site o remoto para atención a incidentes,
                                operación de servidores y datacenter, equipamiento de reemplazo temporal, etc. </p>



                            <LinkRouter to='/soporte' className="container botonAppMobile">
                                <div className="btnfluor">
                                    <a href="">info</a>
                                </div>
                            </LinkRouter>


                        </div>
                    </div>
                </div>


            </section>
            <section id='principal'>
                <div id='divprincipal'>
                    <div className='container1'>
                        <h4>Quienes somos</h4>
                        <h1>Nuestra fórmula</h1>
                        <p id="parraf">Nuestra forma de trabajar
                            y lograr resultados está basada en tres pilares fundamentales que son trasversales a todas las disciplinas
                            y áreas que abordamos.</p>
                    </div>
                    <div className='container2'>
                        <div className='point'>
                            <h3>Conocemos el negocio de nuestros clientes</h3>
                            <p>Nos interesa conocer el negocio de nuestros clientes y entender cuales son sus prioridades y sus puntos neurálgicos.</p>

                        </div>
                        <div className='point'>
                        <h3>Confianza e integridad</h3> 
                        <p>Creemos fundametal construir la confianza con nuestros clientes para agilizar todos los procesos y maximizar la eficiencia y la independencia.</p>                           
                        </div>
                        <div className='point'>
                        <h3>Experiencia y servicio</h3>
                        <p>Nuestra experiencia y enfoque al servicio nos permiten elegir soluciones adecuadas para cada caso.</p>
                        
                        </div>

                    </div>
                </div>



            </section>
            
           
        </>
    )
}
export default Servicios