import './App.css';
import { useState } from "react";
import Hero from './components/hero';
import AboutSec from './components/aboutSec';
import ContcatSec from './components/contactSec';
import BizSec from './components/bizSec';

function App() {
  const [openNav, setOpenNav] = useState(false)
  const openHandler = () => {
    setOpenNav(!openNav)
  }
  return (
    <div className='flex flex-col'>
      <Hero />
      <AboutSec />
      <div className='mt-[1300px]'>
        <BizSec />
      </div>
    </div>
  );
}

export default App;
