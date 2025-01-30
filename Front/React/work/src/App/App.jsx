import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from '../Home/Home';
import Service from '../servicePage/servicePage';
import NavBar from '../navBar/navBar';
import NetworkConsulting from '../networkConsulting/networkConsulting'
import ServicePage from '../servicePage/servicePage'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/networkConsulting' element={<NetworkConsulting />} />
          <Route path='/ServicePage' element={<ServicePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
