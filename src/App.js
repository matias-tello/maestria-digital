import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Cursos from './components/Cursos';

function App() {
  return (
    
    <BrowserRouter>
    
    
    <Hero/>
    <Cursos/>
    
    
    
    </BrowserRouter>
  );
}

export default App;
