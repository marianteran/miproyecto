import React from 'react'
import './footer.css'
import { Link as Linkrouter } from 'react-router-dom'; 

const Footer = () => {



  return (
    <>



      <footer className="footer">


        <div className="footer"><b>SEOMA Web Design</b> es un desarrollo integral en conjunto con MINDHUB </div>

        <div className="footer__copyright">
          <small>&copy;GRUPO A</small>
        </div>

        <div className='footer_toLink'>

          <div><Linkrouter className="footer__link" to="/">Home</Linkrouter></div>

          <div><Linkrouter className="footer__link" to="/product">Products</Linkrouter></div>

          <div><Linkrouter className="footer__link" to="/servicios">Services</Linkrouter></div>

        </div>

      </footer>



    </>
  )
}

export default Footer