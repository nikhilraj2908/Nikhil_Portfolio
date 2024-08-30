import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Portfolio } from './components/portfolio/portfolio';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { useState } from 'react';
function App() {
  const[mode,setmode]=useState("light");
  return (
    <BrowserRouter>
      <Header mode={mode} setmode={setmode}></Header>
      <Portfolio mode={mode}></Portfolio>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
