import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Page/Hero';
import Pricing from './Page/Pricing';
import Service from './Page/Service';
import Work from './Page/Work';

function App() {
  return (
    <div className='bg-primaryDark min-h-screen overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Work/>
      <Service/>
      <Pricing/>
    </div>
  );
}

export default App;