import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Detail from './Detail';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';
import Nav from './Nav';
import Header from './Header';
import Months from './Months'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="App " style={{ background : "#bfbfbf" }}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/months/' element={<Months/>}/>
          <Route path='/months/:id' element={<Detail/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
