import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Notestate from './context/notes/Notestate';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <>
      <Notestate>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
      </Notestate>
    </>
  );
}

export default App;
