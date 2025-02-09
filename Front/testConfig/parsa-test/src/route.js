import { Link, Route, Routes } from "react-router-dom";
import Home from './component/home/home.jsx'
import About from './component/about/about.jsx'
import Seervices from './component/Seervices/service.jsx'
let routes=[
    { path: "/", element: <Home /> },
    { path: "/Aboute", element: <About /> },
    { path: "/Service", element: <Seervices /> }
];
export default routes