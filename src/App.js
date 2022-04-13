import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navb from './components/navegation/Navb';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';

function App() {
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
