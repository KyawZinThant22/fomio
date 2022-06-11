import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;