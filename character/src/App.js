import Home from "./pages/Home"
import Background from "./pages/Background"
import Items from "./pages/Items"
import Spells from "./pages/Spells"
import {Routes, Route} from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/background" element={<Background/>}/>
        <Route path="/spells" element={<Spells/>}/>
        <Route path="/items" element={<Items/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
