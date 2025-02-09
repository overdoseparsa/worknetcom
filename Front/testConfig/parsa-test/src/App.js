
import './App.css';
import { useRoutes } from 'react-router-dom';
import route from './route';
function App() {
let router = useRoutes(route)

  return (
    <>
    {router}
    </>
  );
}

export default App;
