import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Reg from './components/Reg';
import Log from './components/Log';
import BillingInfo from './components/BillingInfo';
import Cookies from 'js-cookie';
import Home from './components/Home';
import { useNavigate } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import FormProduct from './components/FormProduct';



function App() {
  const [sessionId, setSessionId] = useState(Cookies.get("sessionId") || "");
  const [userInfo, setUserInfo] = useState({})
  const navigate = useNavigate(); 

  useEffect(() => {
    console.log("sessionId changed:", sessionId);
    Cookies.set("sessionId", sessionId);
  }, [sessionId]);
  
  useEffect(() => {
  fetch('http://localhost:8080/api/getuser?sessionId=' + sessionId)
  .then(response => response.json()) 
  .then(data => {
          setUserInfo({...data, password : ""});
      console.log(data)
  })
  .catch(err => {
      console.log(err)
  })
 }, [])

  return (
    <div className="App">
      <NavBar sessionId={sessionId} setSessionId={setSessionId} userInfo={userInfo} setUserInfo={setUserInfo} />
        <Routes>
          <Route path="/" element={<Home sessionId={sessionId} setSessionId={setSessionId}/>} defualt/> 
          <Route path="/register" element={<Reg sessionId={sessionId} setSessionId={setSessionId}/>} /> 
          <Route path="/login" element={<Log sessionId={sessionId} setSessionId={setSessionId}/>} />
          <Route path="/product/add" element={<FormProduct sessionId={sessionId} setSessionId={setSessionId}/>} />
        </Routes> 
    </div>
  );
}

export default App;
