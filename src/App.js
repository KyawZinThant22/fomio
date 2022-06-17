import './App.css';
import Navbar from './Components/Navbar';
import Fquestions from './Page/Fquestions';
import Hero from './Page/Hero';
import Pricing from './Page/Pricing';
import Service from './Page/Service';
import Work from './Page/Work';
import { useEffect } from 'react';
import scrollreveal from 'scrollreveal';
import Layout from './Components/Layout';
import Home from './Page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProjects from './Page/AllProjects';
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
      #pricing,
      #questions,
      #footer`,{
        opacity: 0,
        interval :200,
        scale: 1.2
      }
    )
  },[])
  return (
    <div className='bg-primaryDark min-h-screen overflow-hidden'>
       <BrowserRouter>
     <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<AllProjects/>}/>
          </Routes>
     </Layout>
       </BrowserRouter>
    </div>
  );
}

export default App;