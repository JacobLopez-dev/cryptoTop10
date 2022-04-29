import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/layout/NavBar"
import SideMenu from './components/layout/SideMenu';
import Articles from './pages/Articles';
import Home from "./pages/Home";
import News from './pages/News';
import CryptoPage from './pages/CryptoPage';


function App() {
  return (
    <Router>
    <div data-theme="dark" className="drawer drawer-mobile">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/> 
      <div className="drawer-content flex flex-col justify-between max-h-screen">
      <NavBar/>
      <main className="container relative mx-auto h-screen">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Articles/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path='/crypto/:cryptoSlugParam' element={<CryptoPage />} />
      </Routes>
      </main>
      </div>
      <SideMenu/>
    </div>
    </Router>
  );
}

export default App;
