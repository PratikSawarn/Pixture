import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
