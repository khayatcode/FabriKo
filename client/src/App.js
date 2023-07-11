import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Reg from './components/Reg';
import Log from './components/Log';
import BillingForm from './components/BillingForm';
import Cookies from 'js-cookie';
import Home from './views/Home';
import Footer from './components/Footer';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import ViewProduct from './components/ViewProduct';
import ContactUs from './components/ContactUs';
import Shipping from './components/Shipping';
import ShoppingCartConf from './components/ShoppingCartConf';
import OrderSuccessPage from './components/OrderSuccessPage';
import ShoppingCart from './components/ShoppingCart';
import Terms from './components/Terms';
import { Privacy } from './components/Privacy';
import CategoryPage from './views/CategoryPage';



function App() {
  const [sessionId, setSessionId] = useState(Cookies.get("sessionId") || "");
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    console.log("sessionId changed:", sessionId);
    Cookies.set("sessionId", sessionId);
  }, [sessionId]);

  useEffect(() => {
    if(!sessionId) return;
    fetch('http://localhost:8080/api/getuser/' + sessionId)
    .then(response => response.json()) 
    .then(data => {
            setUserInfo({...data, password : ""});
    })
    .catch(err => {
        console.log(err)
    })
   }, [sessionId])

  return (
    <div className="App">
      <NavBar sessionId={sessionId} setSessionId={setSessionId} userInfo={userInfo} setUserInfo={setUserInfo}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Reg sessionId={sessionId} setSessionId={setSessionId}/>} /> 
        <Route path="/login" element={<Log sessionId={sessionId} setSessionId={setSessionId}/>} />
        <Route path="/category/:categoryName" element={<CategoryPage sessionId={sessionId} />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/product/edit/:productId" element={<EditProduct />} />
        <Route path="/product/view/:productId" element={<ViewProduct sessionId={sessionId}/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/billing" element={<BillingForm userInfo={userInfo} sessionId={sessionId}/>} />
        <Route path="/shippingInfo" element={<Shipping sessionId={sessionId}/>} />
        <Route path="/shopping/cart" element={<ShoppingCart sessionId={sessionId} firstName={userInfo.firstName}/>} />
        <Route path="/order/success" element={<OrderSuccessPage firstName={userInfo.firstName}/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/category/error" element={<h1>Category Not Found</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} /> 
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
