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
import DetalleAppWeb from './components/detalleProducto/DetalleAppWeb';
import DetalleAppMobile from './components/detalleProducto/DetalleAppMobile';
import SignIn from './components/signIn-up/SignIn';
import SignUp from './components/signIn-up/SignUp';
import Servicios from './components/servicios/Servicios';
import Cart from './components/carro/Cart';
import swal from 'sweetalert'
import DetalleEquipments from './components/detalleequipments/DetalleEquipments';



function App() {
  const [{ apps }, dispatch] = useStateValue()

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token")
      axios.get("http://localhost:4000/api/signinToken", {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then(user => {
          if (user.data.success) {
            swal({
              title: user.data.response,
              icon: "success",
              buttons: "ok"
            })
            dispatch({
              type: accionType.USERDB,
              user: user.data
            })
          }
          else {
            localStorage.removeItem("token")
          }
        })
    }

  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/appWeb" element={<DetalleAppWeb />} />
          <Route path="/appMobile" element={<DetalleAppMobile />} />
          <Route path="/signin" element={<SignIn />} />        
          <Route path="/signup" element={<SignUp />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/equipments" element={<DetalleEquipments />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
