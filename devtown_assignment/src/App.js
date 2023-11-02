import logo from './logo.svg';
import './App.css';
import Navbar from './component/Pages/Navbar';
import { Home } from './component/Pages/Home';
import Footer from './component/Pages/Footer';
import { MobileMenu } from './component/Pages/MobileMenue';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <MobileMenu/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
