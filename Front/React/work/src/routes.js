import Home from "./Home/Home";
import Service from "./servicePage/servicePage";
import NetworkConsulting from "./networkConsulting/networkConsulting";
import ActiveNetworkServices from "./activeNetworkServices/activeNetworkServices";
import ServicePage from "./servicePage/servicePage";
import PasiveNetworkService from "./pasiveNetworkService/pasiveNetworkService";
import NetworkSecurity from "./networkSecurity/networkSecurity";
import BusinessService from "./businessService/businessService";
import ProductPage from "./productPage/productPage";
import WebService from "./webService&software/webService";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/Service", element: <Service /> },
  { path: "/networkConsulting", element: <NetworkConsulting /> },
  { path: "/ServicePage", element: <ServicePage /> },
  { path: "/ActiveNetworkServices", element: <ActiveNetworkServices /> },
  { path: "/PasiveNetworkService", element: <PasiveNetworkService /> },
  { path: "/NetworkSecurity", element: <NetworkSecurity /> },
  { path: "/businessService", element: <BusinessService /> },
  { path: "/webService", element: <WebService /> },
  { path: "/ProductPage", element: <ProductPage /> },
];
export default routes
