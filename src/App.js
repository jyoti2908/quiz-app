import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Html from './questions/Html';
import Css from './questions/Css';
import Javascript from './questions/Javascript';
import ReactJs from './questions/ReactJs';
import Facts from './questions/Facts';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/about';
import Contact from './pages/contact';
import Quiz from './pages/quiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/reactjs" element={<ReactJs />} />
          <Route path="/gk" element={<Facts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
