import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Content from './Components/Contents';
import One from "./Sections/One"
import Two from "./Sections/Two"

function App() {
  return (
    <Router>
     
      <Routes>
      {/* <Route path= "/" element={<Navbar/>}/> */}
        <Route path="/" element={<Content />} />
        <Route path="/one" element={<One/>} />
        <Route path="/two" element={<Two/>} />
      </Routes>
    </Router>
  );
}

export default App;
