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
import OrderSuccessPage from './components/OrderSuccessPage';
import ShoppingCart from './components/ShoppingCart';
import Terms from './components/Terms';
import { Privacy } from './components/Privacy';
import CategoryPage from './views/CategoryPage';
import NotFound from './components/NotFound';
import { config } from './Constants';



function App() {
  const [sessionId, setSessionId] = useState(Cookies.get("sessionId") || "");
  const [userInfo, setUserInfo] = useState({})
  const [orderNumber, setOrderNumber] = useState(Cookies.get("orderNumber") || "");
  const [loaded, setLoaded] = useState(false);
  const SERVER_URL = config.url;
  console.log("URL:", SERVER_URL);

  useEffect(() => {
    console.log("sessionId changed:", sessionId);
    Cookies.set("sessionId", sessionId);
    console.log("orderNumber changed:", orderNumber);
    Cookies.set("orderNumber", orderNumber);
  }, [sessionId, orderNumber]);

  useEffect(() => {
    if (!sessionId) return;
    fetch(`${SERVER_URL}/api/getuser/` + sessionId)
      .then(response => response.json())
      .then(data => {
        setUserInfo({ ...data, password: "" });

      })
      .catch(err => {
        console.log(err)
      })
  }, [sessionId])

  useEffect(() => {
    setLoaded(true);
  }, [userInfo])

  if (orderNumber == null) {
    console.log("orderNumber is null");
  }

  return (
    <div className="App">
      <NavBar sessionId={sessionId} setSessionId={setSessionId} userInfo={userInfo} setUserInfo={setUserInfo} setOrderNumber={setOrderNumber} loaded={loaded} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Reg sessionId={sessionId} setSessionId={setSessionId} />} />
        <Route path="/login" element={<Log sessionId={sessionId} setSessionId={setSessionId} />} />
        <Route path="/category/:categoryName" element={<CategoryPage sessionId={sessionId} userInfo={userInfo} />} />
        <Route path="/createProduct" element={<CreateProduct userInfo={userInfo} sessionId={sessionId} />} />
        <Route path="/product/edit/:productId" element={<EditProduct userInfo={userInfo} sessionId={sessionId} />} />
        <Route path="/product/view/:productId" element={<ViewProduct sessionId={sessionId} userInfo={userInfo} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/billing" element={<BillingForm userInfo={userInfo} sessionId={sessionId} />} />
        <Route path="/shippingInfo" element={<Shipping sessionId={sessionId} setOrderNumber={setOrderNumber} />} />
        <Route path="/shopping/cart" element={<ShoppingCart sessionId={sessionId} firstName={userInfo.firstName} />} />
        <Route path="/order/success" element={<OrderSuccessPage firstName={userInfo.firstName} orderNumber={orderNumber} setOrderNumber={setOrderNumber} sessionId={sessionId} />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
