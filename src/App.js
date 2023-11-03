import './App.css';
import { useState } from "react";
import Hero from './components/hero';
import AboutSec from './components/aboutSec';
import BizSec from './components/bizSec';
import TestSec from './components/testSec';

function App() {
  const [openNav, setOpenNav] = useState(false)
  const openHandler = () => {
    setOpenNav(!openNav)
  }
  return (
    <div className='flex flex-col'>
      <Hero />
      <div className='mt-32'>
        <AboutSec />
      </div>
      <div className='mt-[1300px]'>
        <BizSec />
      </div>
      <div className='mt-16'>
        <TestSec />
      </div>
    </div>
  );
}

export default App;
