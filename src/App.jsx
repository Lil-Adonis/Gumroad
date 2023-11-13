import './App.css'
import Header from "./components/Header";
import Ideas from "./components/Ideas/Ideas";
import Hero from './components/Hero';
import Discover from './components/discover/Discover';
import SmallBits from './components/SmallBits';
import OwnBed from './components/OwnBed';

function App() {

  return (
   <div className=''>
    <Header/>
    <Hero/>
    <Ideas/>
    <Discover/>
    <SmallBits/>
    <OwnBed/>
    
   </div>
  )
}

export default App
