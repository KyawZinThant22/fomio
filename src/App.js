import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Page/Hero';import { lazy } from 'react';
import Work from './Page/Work';

function App() {
  return (
    <div className='bg-primaryDark min-h-screen overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Work/>
    </div>
  );
}

export default App;