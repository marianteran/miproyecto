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
          <Route path="product" element={<Product />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
