import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from '../Home/Home';
import Service from '../servicePage/servicePage';
import NavBar from '../navBar/navBar';
import Footer from '../Footer/footer';
import NetworkConsulting from '../networkConsulting/networkConsulting';
import ActiveNetworkServices from '../activeNetworkServices/activeNetworkServices';
import ServicePage from '../servicePage/servicePage';
import PasiveNetworkService from '../pasiveNetworkService/pasiveNetworkService';
import NetworkSecurity from '../networkSecurity/networkSecurity';
import BusinessService from '../businessService/businessService';
import ProductPage from '../productPage/productPage'
import WebService from '../webService&software/webService';

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
          <Route path='/ActiveNetworkServices' element={
            <ActiveNetworkServices />
          } />
          <Route path='/PasiveNetworkService' element={<PasiveNetworkService />} />
          <Route path='/NetworkSecurity' 
          element={<NetworkSecurity />} />
          <Route path='/businessService' element={<BusinessService />} />
          <Route path='/webService' element={<WebService />} />
          <Route path='/ProductPage' element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
