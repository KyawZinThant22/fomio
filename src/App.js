import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Page/Hero';
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