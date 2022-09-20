import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallary from './components/Gallary';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import { Work } from './components/Work';
import {useState} from 'react';

function App() {
  const [getId, setGetId] = useState(0);
  console.log(getId);
  return (
    <>
      <Navbar/>
      <Hero/>
      <Gallary id ={getId} />
      <Work setGetId = {setGetId} />
      <Testimonials/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
