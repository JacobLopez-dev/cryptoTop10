import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/layout/NavBar"
import SideMenu from './components/layout/SideMenu';
import Home from "./pages/Home";
import Guides from './pages/Guides';
import News from './pages/News';
import CryptoPage from './pages/CryptoPage';
import Footer from './components/layout/Footer';


function App() {
  const [menuToggle, setMenuToggle] = useState('checked')

  const toggleMenu = (e) => {
    if(menuToggle === 'unchecked'){
      setMenuToggle('checked')
      // console.log(menuToggle)
    }else{
      setMenuToggle('unchecked')
      // console.log(menuToggle)
    }
  }
  
  useEffect(()=>{
    const menuButton = document.querySelector('.drawer-toggle')
    let menuChecked = menuToggle === 'unchecked' ? true : false
    menuButton.checked = menuChecked
  }, [menuToggle])

  return (
    <Router>
    <div data-theme="dark" className="drawer drawer-mobile">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" onClick={(e)=>toggleMenu(e)}/> 
      <div className="drawer-content flex flex-col justify-between ">
      <NavBar/>
      <main className="w-full relative mx-auto h-auto lg:h-fit">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/guides" element={<Guides/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path='/crypto/:cryptoID' element={<CryptoPage />} />
      </Routes>
      </main>
      <Footer/>
      </div>
      <SideMenu toggleMenu={toggleMenu}/>
    </div>
    </Router>
  );
}

export default App;
