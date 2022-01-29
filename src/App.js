import TopNavbar from "./components/TopNavbar";
import Intro from "./components/Intro.js";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; /* import required to use react-bootstrap */
import HomeScreen from "./screens/HomeScreen";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <AppRoutes/>
    </div>
  );
}

export default App;
