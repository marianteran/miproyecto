import React from 'react'

import HeroProduct from './HeroProduct'
import './product.css'

const Product = () => {
  return (
    <>

    <HeroProduct/>
      <div className='productHero'>
        <h1 >Crea tu Página Web</h1>

        <p>Descubre cómo crear un sitio web de forma fácil y rápida,.</p>
      </div>

      <div className="productMenuCentral">

        <div className="productMenu">
          <div className="productMenuItem">Servicios</div>
          <div className="productMenuItem">Productos</div>
          <div className="productMenuItem">Equipos</div>
        </div>

        <div className="productMain">
          <h2>Su diseño a medida</h2>
          <p>Aquí verá su diseño de Página Web a medida que agregue los elementos que desee</p>
          <div className="productYourPage">NOTA:
            <p>1° Acá es donde se va a ir montando la Página a medida que se van seleccionando los componentes del menú de la izquierda</p>
            <p>2° Dicho menú es del tipo desplegable con las opciones a elegir</p>
            <p>3° Todo es Responsive, tanto Web, Tablet y Móvil</p>
          </div>
        </div>

      </div>

    </>
  )
}

export default Product