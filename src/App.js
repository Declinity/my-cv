import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Sidebar } from './Components/Sidebar.tsx';
import { Info } from './Components/Info.tsx';
import { Projects } from './Components/Projects.tsx';
import { Personal} from "./Components/Personal.tsx"
import {CoverLetter} from "./Components/CoverLetter.tsx"
function App() {
  return (
    <Router >
      <div className="App" style={{}}>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/my-cv" element={<Home></Home>} />
        <Route path="/Info" element={<Info></Info>} />
        <Route path="/Portfolio" element={<Projects></Projects>} />
        <Route path="/Personal" element={<Personal></Personal>} />
        <Route path="/CoverLetter" element={<CoverLetter></CoverLetter>} />
      </Routes>
      </div>
    </Router> 
  );
}

export default App;
