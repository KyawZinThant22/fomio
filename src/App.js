import './App.css';
import Navbar from './Components/Navbar';
import Fquestions from './Page/Fquestions';
import Hero from './Page/Hero';
import Pricing from './Page/Pricing';
import Service from './Page/Service';
import Work from './Page/Work';
import { useEffect } from 'react';
import scrollreveal from 'scrollreveal';
function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin : 'left',
      distance : '60px',
      duration : 1000,
      reset : true
    })
    sr.reveal(
      `nav,
      #hero,
      #projects,
      #card,
      #service,
      #feedback
      #pricing`,{
        opacity: 0,
        interval :400,
        scale: 1.2
      }
    )
  },[])
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