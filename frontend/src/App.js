import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import Home from './components/Home';


function App() {

  const [token, setToken] = useState(null);
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
    console.log(storedToken, 'token');

    
  }, []);



  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={token? <Home/> : <Login/>} />
        <Route  path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
