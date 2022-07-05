import logo from './logo.svg';
import './App.css';
import Install from './component/Home.js'
import Home from './component/Install.js';


function App() {
  
      if(window.ethereum) {
        return <Home />
      } else {
        return <Install />
      }
}

export default App;
