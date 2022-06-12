import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Page/Hero';import { lazy } from 'react';

function App() {
  return (
    <div className='bg-primaryDark min-h-screen overflow-hidden'>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;