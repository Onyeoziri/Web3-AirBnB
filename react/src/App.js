import './App.css';
import { useState, useRef } from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Login from './pages/login/Login';
import Wallet from './pages/wallet/Wallet';
import House from './pages/House/House';



function App() {

  

  

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/wallet' element={<Wallet />}></Route>
            <Route path='/house' element={<House />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
