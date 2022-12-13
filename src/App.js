import './App.css';
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import About from './Components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
