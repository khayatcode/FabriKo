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
    fetch('http://localhost:8080/api/getuser?sessionId=' + sessionId)
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
        {/* <Route path="/category/upper" element={<UpperCategory />} />
        <Route path="/category/bottom" element={<BottomCategory />} />
        <Route path="/category/shoes" element={<ShoesCategory />} /> */}
        <Route path="/category/:categoryName" element={<CategoryPage sessionId={sessionId} />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/product/edit/:productId" element={<EditProduct />} />
        <Route path="/product/view/:productId" element={<ViewProduct />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/billing" element={<BillingInfo/>} />
        <Route path="/shippingInfo" element={<Shipping/>} />
        <Route path="/shopping/cart" element={<ShoppingCart/>} />
        <Route path="/shopping/cart/confirm" element={<ShoppingCartConf/>} />
        <Route path="/order/success" element={<OrderSuccessPage/>} />
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
