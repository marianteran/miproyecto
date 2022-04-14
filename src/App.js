import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
