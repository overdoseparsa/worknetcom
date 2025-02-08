import "./App.css";
import { useRoutes } from "react-router-dom";
import NavBar from "../navBar/navBar";
import Footer from "../Footer/footer";
import routes from "../routes"

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <NavBar />
      {router}
      <Footer />
    </>
  );
}

export default App;
