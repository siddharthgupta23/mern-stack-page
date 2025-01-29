import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import "./App.scss"
import Hero from "./components/Hero";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero/>}/>
          <Route path="/partners" element={<Partners/>}/>
  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
