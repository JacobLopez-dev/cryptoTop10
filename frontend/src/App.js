import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/layout/NavBar"
import SideMenu from './components/layout/SideMenu';
import Home from "./pages/Home";
import Guides from './pages/Guides';
import News from './pages/News';
import CryptoPage from './pages/CryptoPage';
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import Register from './pages/Register'

import PrivateRoute from './features/auth/routes/PrivateRoute';
import AdminRoute from './features/auth/routes/AdminRoute';

import CreateGuide from './pages/CreateGuide';
import Guide from './pages/Guide';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GuideEdit from './pages/GuideEdit';
import Profile from './pages/Profile'

function App() {
  const [menuToggle, setMenuToggle] = useState('unchecked')

  const toggleMenu = (e) => {
    if(menuToggle === 'unchecked'){
      setMenuToggle('checked')
    }else{
      setMenuToggle('unchecked')
    }
  }
  
  useEffect(()=>{
    const menuButton = document.querySelector('.drawer-toggle')
    let menuChecked = menuToggle === 'checked' ? true : false
    menuButton.checked = menuChecked
  }, [menuToggle])

  return (
    <Router>
    <ScrollToTop>
    <div className="drawer">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" onClick={(e)=>toggleMenu(e)}/> 
      <div className="drawer-content flex flex-col justify-between ">
      <NavBar/>
      <main className="w-full relative h-fit">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/guides" element={<Guides/>}/>
        <Route path="/guide/:slug" element={<Guide/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path='/crypto/:cryptoID' element={<CryptoPage />} />
        {/* Only accessible by logged in users */}
        <Route path='/new-guide' element={<PrivateRoute/>}>
          <Route path="/new-guide" element={<CreateGuide/>}/>
        </Route>
        <Route path='/guide/:slug/edit' element={<PrivateRoute/>}>
          <Route path='/guide/:slug/edit' element={<GuideEdit/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* Only accessible by admin */}
        <Route path='/admin-dashboard' element={<AdminRoute/>}>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        </Route>
        {/* Profile accessible by whoever is logged in */}
        <Route path='/author/:user' element={<PrivateRoute/>}>
          <Route path='/author/:user' element={<Profile/>}/>
        </Route>
      </Routes>
      </main>
      <Footer/>
      </div>
      <SideMenu toggleMenu={toggleMenu}/>
    </div>
    </ScrollToTop>
    <ToastContainer/>
    </Router>
  );
}

export default App;
