import TopNavbar from "./components/TopNavbar";
import Intro from "./components/Intro.js";
import 'bootstrap/dist/css/bootstrap.min.css'; {/* import required to use react-bootstrap */ }

function App() {
  return (
    <div>
      <TopNavbar />
      <Intro />
    </div>
  );
}

export default App;
