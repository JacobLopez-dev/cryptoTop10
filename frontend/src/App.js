import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/layout/NavBar"
import SideMenu from './components/layout/SideMenu';
import Articles from './pages/Articles';
import Home from "./pages/Home";


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
      </Routes>
      </main>
      </div>
      <SideMenu/>
    </div>
    </Router>
  );
}

export default App;
