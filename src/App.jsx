import './App.css'
import Header from "./components/Header";
import Ideas from "./components/Ideas/Ideas";
import Hero from './components/Hero';
import Discover from './components/discover/Discover';
import SmallBits from './components/SmallBits';
import OwnBed from './components/OwnBed';
import SellAnyone from './components/SellAnyone';
import SellAnything from './components/SellAnything';

function App() {

  return (
    <div className="App">
    <Header/>
    <Hero/>

    <Discover/>
    <SmallBits/>
    <OwnBed/>
    <SellAnything/>
    <SellAnyone/>
    
   </div>
  )
}

export default App
