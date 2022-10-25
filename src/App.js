import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Service' element={<Service />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
