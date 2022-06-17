import './App.css';
import Navbar from './Components/Navbar';
import Fquestions from './Page/Fquestions';
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
      <Fquestions/>
    </div>
  );
}

export default App;