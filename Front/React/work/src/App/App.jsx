import "./App.css";
import { useLocation, useRoutes } from "react-router-dom";
import NavBar from "../navBar/navBar";
import Footer from "../Footer/footer";
import routes from "../routes";
import { useEffect, useState } from "react";
import Loading from "../loading/loading"

function App() {
  let router = useRoutes(routes);
  let location = useLocation();
  const [loading, setLoading] = useState(false);
  let time =1000;
  if(location.pathname === "/"){
    time =500
  }
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, time);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const isAdminPanel = location.pathname.startsWith("/Admin");
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {!isAdminPanel && <NavBar />}
          {router}
          {!isAdminPanel && <Footer />}
        </>
      )}
    </>
  );
}

export default App;
