import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Detail from './Detail';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/months/:id' element={<Detail/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
