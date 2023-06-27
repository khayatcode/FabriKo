import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Reg from './components/Reg';
import Log from './components/Log';
import BillingInfo from './components/BillingInfo';
import Cookies from 'js-cookie';
import Home from './views/Home';
import Footer from './components/Footer';
import UpperCategory from './views/UpperCategory';
import BottomCategory from './views/BottomCategory';
import ShoesCategory from './views/ShoesCategory';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import ViewProduct from './components/ViewProduct';



function App() {
  const [sessionId, setSessionId] = useState(Cookies.get("sessionId") || "");

  useEffect(() => {
    console.log("sessionId changed:", sessionId);
    Cookies.set("sessionId", sessionId);
  }, [sessionId]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Reg sessionId={sessionId} setSessionId={setSessionId}/>} /> 
        <Route path="/login" element={<Log sessionId={sessionId} setSessionId={setSessionId}/>} />
        <Route path="/category/upper" element={<UpperCategory />} />
        <Route path="/category/bottom" element={<BottomCategory />} />
        <Route path="/category/shoes" element={<ShoesCategory />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/editProduct/example" element={<EditProduct />} />
        <Route path="/viewProduct/example" element={<ViewProduct />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
