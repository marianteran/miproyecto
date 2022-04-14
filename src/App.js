import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { accionType } from './context/reducer';
import { useStateValue } from './context/Stateprovider';
import axios from 'axios'
import Navb from './components/navegation/Navb';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';
import DetalleProducto from './components/detalleProducto/DetalleProducto';
import SignIn from './components/signIn-up/SignIn';
import SignUp from './components/signIn-up/SignUp';
import Servicios from './components/servicios/Servicios';
import Cart from './components/carro/Cart';


function App() {
  const [{ apps, smedia, equipments }, dispatch] = useStateValue()
  
  useEffect(() => {
    axios.get("http://localhost:4000/api/apps")
    .then(response => {
      dispatch({
        type: accionType.APPSDB,
        apps: response.data.response.apps
      })
    })

    axios.get("http://localhost:4000/api/smedia")
    .then(response => {
      dispatch({
        type: accionType.SMEDIADB,
        smedia: response.data.response.socialMedia
      })
    })
    axios.get("http://localhost:4000/api/equipments")
    .then(response => {   
      dispatch({
        type: accionType.EQUIPMENTSDB,
        equipments: response.data.response.equipments
      })
    })
  }, [])
  console.log(apps)
  console.log(smedia)
  console.log(equipments)
  return (
    <div className="App">
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detalle" element={<DetalleProducto />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/cart" element={<Cart />} />


  
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
