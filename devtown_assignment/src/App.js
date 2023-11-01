import logo from './logo.svg';
import './App.css';
import Navbar from './component/Pages/Navbar';
import { Home } from './component/Pages/Home';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
