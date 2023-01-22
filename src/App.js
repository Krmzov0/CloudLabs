import './App.css';
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/ServicesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
