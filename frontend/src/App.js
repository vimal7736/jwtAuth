import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import Home from './components/Home';


function App() {

const token = localStorage.getItem('token')
console.log(token,'token');




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
