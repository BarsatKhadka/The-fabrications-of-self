import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Content from './Components/Contents';
import QuestionOfIdentity from './Sections/three';
import PersonWithoutSelf from './Sections/two';
import Reflection from './Sections/one';

function App() {
  return (
    <Router>
     
      <Routes>
      {/* <Route path= "/" element={<Navbar/>}/> */}
        <Route path="/" element={<Content />} />
        <Route path="/one" element={<Reflection />} />
        <Route path="/two" element={<PersonWithoutSelf />} />
        <Route path="/three" element={<QuestionOfIdentity/>}/>
      </Routes>
    </Router>
  );
}

export default App;
