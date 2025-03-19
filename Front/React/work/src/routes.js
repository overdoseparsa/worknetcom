import Home from "./Home/Home";
import Service from "./servicePage/servicePage";
import NetworkConsulting from "./networkConsulting/networkConsulting";
import ActiveNetworkServices from "./activeNetworkServices/activeNetworkServices";
import ServicePage from "./servicePage/servicePage";
import PassiveNetworkService from "./passiveNetworkService/passiveNetworkService";
import NetworkSecurity from "./networkSecurity/networkSecurity";
import BusinessService from "./businessService/businessService";
import ProductPage from "./productPage/productPage";
import WebService from "./webService&software/webService";
import ContactForm from "./contactForm/contactForm";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/Services/", element: <Service /> },
  { path: "/NetworkConsulting/", element: <NetworkConsulting /> },
  { path: "/ServicePage/", element: <ServicePage /> },
  { path: "/ActiveNetworkServices/", element: <ActiveNetworkServices /> },
  { path: "/PassiveNetworkService/", element: <PassiveNetworkService /> },
  { path: "/NetworkSecurity/", element: <NetworkSecurity /> },
  { path: "/businessService/", element: <BusinessService /> },
  { path: "/WebService/", element: <WebService /> },
  { path: "/ProductPage/", element: <ProductPage /> },
  { path:"/ContactForm/", element:< ContactForm/>},
];
export default routes
