import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Reg from './components/Reg';
import Log from './components/Log';
import BillingInfo from './components/BillingInfo';
import Cookies from 'js-cookie';
import Home from './components/Home';



function App() {
  const [sessionId, setSessionId] = useState(Cookies.get("sessionId") || "");

  useEffect(() => {
    console.log("sessionId changed:", sessionId);
    Cookies.set("sessionId", sessionId);
  }, [sessionId]);

  return (
    <div className="App">
      <NavBar />
      <Home />
      {/* <NavBar />
      <Routes>
        <Route path="/register" element={<Reg sessionId={sessionId} setSessionId={setSessionId}/>} /> 
        <Route path="/login" element={<Login sessionId={sessionId} setSessionId={setSessionId}/>} />
      </Routes>  */}
    </div>
  );
}

export default App;
