import './App.scss';
import Web3 from 'web3';
import {NavBar} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, About, Login, ErrorPage} from './pages';



function App() {
  return (
    <div className="AppLite">
    <Router>
        <NavBar isLogedIn={false}/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />

          <Route path='*' element={<ErrorPage />} />

        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
