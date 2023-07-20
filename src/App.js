import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Cursos from './components/Cursos';
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    
    <BrowserRouter>
    
    
    <Hero/>
    <Cursos/>
    
    
    
    </BrowserRouter>
  );
}

export default App;
